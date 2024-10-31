const infoSchema = require('../schema/infoSchema');
const {createTable, checkRecord, insertRecord, updateRecord} = require('../util/sqlFunction');
const bcrypt = require('bcrypt');
const fs = require('fs');
const csv = require('csv-parser');


const scoreFields = ['toan', 'ngu_van', 'ngoai_ngu', 'vat_ly', 'hoa_hoc', 'sinh_hoc', 'lich_su', 'dia_ly', 'gdcd'];
const validateScore = (data) => {
    scoreFields.forEach(field => {
        if(!data[field]){
            data[field] = 0;
        } else {
            data[field] = Math.max(0, Math.min(10, data[field]));
        }
    });
};

const importData = async (req, res) => {
    try {
        const data = req.body;
        const {id, ma_ngoai_ngu, ...scores} = data;
        data.id = bcrypt.hashSync(data.id, 10);

        await createTable(infoSchema);
        // checking id make sure that is only one record
        const existingRecord = await checkRecord('info','id', data.id);
        if(existingRecord) {
            return res.status(400).json({ message: "Data already exists" });
        }
        // ensure scores are between 0 and 10, non-type fields are set to 0
        validateScore(scores);
        const result = await insertRecord('info', {id: data.id, ma_ngoai_ngu, ...scores});

        res.status(201).json({ message: 'Data imported successfully', result });
    } catch (error) {
        res.status(500).json({ message: 'Error importing data', error });
    }
};

const searchData = async (req, res) => {
    try {
        const data = req.query;
        const existingRecord = await checkRecord('info','id', data.id);
        if(!existingRecord) {
            return res.status(400).json({ message: "Data not found" });
        }
        const idMatch = await bcrypt.compare(data.id, existingRecord.id);
        if(idMatch){
            return res.status(200).json({
                message: 'Data found',
                data: existingRecord
            });
        } else {
            return res.status(400).json({ message: "Data not found" });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error searching data', error });
    }
};

const editData = async (req, res) => {
    try {
        const data = req.body;
        const {id, ma_ngoai_ngu, ...scores} = data;
        //Check id
        const existingRecord = await checkRecord('info', 'id', id);
        if (!existingRecord) {
            res.status(404).json({message: "Data not found"});
        }
        // ensure scores are between 0 and 10, non-type fields are set to 0
        validateScore(scores);
        //Update record
        const result = await updateRecord('info', { ...scores, ma_ngoai_ngu }, 'id', id);
        res.status(200).json({message: 'Data updated successfully', result});
    } catch (error) {
        res.status(500).json({message: 'Error updating data', error});
    }
};

const uploadFile = (req, res) => {
    try {
        const filePath = req.file.path;
        const records = [];

        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                row.id = bcrypt.hashSync(row.id, 10);
                records.push(row);
            })
            .on('end', async () => {
                await createTable(infoSchema);
                for (const record of records) {
                    const existingRecord = await checkRecord('info', 'id', record.id);
                    if (!existingRecord){
                        await insertRecord('info', record);
                    }
                }
                res.status(201).json({message: 'Data imported successfully'});
            });
    } catch (error){
        res.status(500).json({message: 'Error importing data', error});
    }
}

module.exports = {importData, searchData, editData, uploadFile};