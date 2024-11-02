const { getStudentScoresById } = require('../util/sqlFunction');

const searchStudentScores = async (req, res) => {
    try {
        const id = req.query.id;
        if (!id) {
            return res.status(400).json({ message: "Student ID is required" });
        }
        const studentScores = await getStudentScoresById(id);
        if (!studentScores) {
            return res.status(404).json({ message: "Student not found" });
        }
        return res.status(200).json({
            message: 'Student scores found',
            data: studentScores
        });
    } catch (error) {
        res.status(500).json({ message: 'Error searching student scores', error });
    }
};

module.exports = { searchStudentScores };