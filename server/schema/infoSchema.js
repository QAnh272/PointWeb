const infoSchema =
    `create table if not exists info (
        id VARCHAR(255) primary key unique not null,
        toan DECIMAL(4, 2),
        ngu_van DECIMAL(4, 2),
        ngoai_ngu DECIMAL(4, 2),
        vat_ly DECIMAL(4, 2),
        hoa_hoc DECIMAL(4, 2),
        sinh_hoc DECIMAL(4, 2),
        lich_su DECIMAL(4, 2),
        dia_ly DECIMAL(4, 2),
        gdcd DECIMAL(4, 2),
        ma_ngoai_ngu VARCHAR(255)
   )`
;

module.exports = infoSchema;