CREATE TABLE `movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,         -- ชื่อหนัง
  `detail` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,       -- รายละเอียดหนังสั้นๆ
  `coverimage` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL, -- รูปโปสเตอร์
  `genre` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,    -- ประเภท
  `release_year` year DEFAULT NULL,                                -- ปีที่ฉาย
  `director` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL, -- ผู้กำกับ
  `rating` double DEFAULT NULL,                                    -- คะแนน
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `movies` 
(`name`, `detail`, `coverimage`, `genre`, `release_year`, `director`, `rating`) 
VALUES
('The Dark Knight',
 'แบทแมนต้องเผชิญหน้ากับโจ๊กเกอร์ ผู้สร้างความโกลาหลให้เมืองก็อธแธม',
 'dark_knight.jpg',
 'Action',
 2008,
 'Christopher Nolan',
 9.0
),

('Interstellar',
 'ภารกิจเดินทางข้ามกาแล็กซีเพื่อค้นหาดาวดวงใหม่ให้มนุษยชาติ',
 'interstellar.jpg',
 'Sci-Fi',
 2014,
 'Christopher Nolan',
 8.7
),

('Parasite',
 'ครอบครัวฐานะยากจนพยายามเข้าไปทำงานในบ้านคนรวยจนเกิดเรื่องพลิกผัน',
 'parasite.jpg',
 'Thriller',
 2019,
 'Bong Joon-ho',
 8.6
),

('Avengers: Endgame',
 'ทีมอเวนเจอร์รวมพลังครั้งสุดท้ายเพื่อหยุดธานอสและกู้จักรวาล',
 'endgame.jpg',
 'Action',
 2019,
 'Anthony & Joe Russo',
 8.4
),

('รถไฟฟ้า มาหานะเธอ',
 'เรื่องราวความรักของสาวออฟฟิศกับหนุ่มสถาปนิกสุดอบอุ่น',
 'rotfaifah.jpg',
 'Romantic Comedy',
 2009,
 'ยงยุทธ ทองกองทุน',
 7.0
);
