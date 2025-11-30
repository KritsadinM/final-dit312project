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
 'https://rollingstonephilippines.com/wp-content/uploads/2025/07/knight_h.webp',
 'Action',
 2008,
 'Christopher Nolan',
 9.0
),

('Interstellar',
 'ภารกิจเดินทางข้ามกาแล็กซีเพื่อค้นหาดาวดวงใหม่ให้มนุษยชาติ',
 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB2qCaYbzrrZFTYTDI6tV6Vk9GjAClSRrQh1OuZKR0yNjzEBnkHLlji1V2M2lCRiQNnFLcqcBqo1MOMggeh0ll3BmEKE6Wgx3mLAL4PKQ&s=10',
 'Sci-Fi',
 2014,
 'Christopher Nolan',
 8.7
),

('Parasite',
 'ครอบครัวฐานะยากจนพยายามเข้าไปทำงานในบ้านคนรวยจนเกิดเรื่องพลิกผัน',
 'https://m.media-amazon.com/images/S/pv-target-images/f1718e6f583273425e1b200c846ce733332570558e4b6dc1e1a3bb24a0bf1fe2._SX1080_FMjpg_.jpg',
 'Thriller',
 2019,
 'Bong Joon-ho',
 8.6
),

('Avengers: Endgame',
 'ทีมอเวนเจอร์รวมพลังครั้งสุดท้ายเพื่อหยุดธานอสและกู้จักรวาล',
 'https://www.lcdtvthailand.com/wp-content/uploads/2021/03/Avengers-Endgame-Review-By-Roman-OG.jpg',
 'Action',
 2019,
 'Anthony & Joe Russo',
 8.4
),

('รถไฟฟ้า มาหานะเธอ',
 'เรื่องราวความรักของสาวออฟฟิศกับหนุ่มสถาปนิกสุดอบอุ่น',
 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbagPP7hrOKsvf9yN0wp4QnTl02Y756hHIAw&s',
 'Romantic Comedy',
 2009,
 'ยงยุทธ ทองกองทุน',
 7.0
);
