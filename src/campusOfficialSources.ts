export type CampusOfficialInfo = {
  officialWebsite?: string
  officialGallery?: string
  campusImage?: string
  imageSource?: string
  imageSourcePage?: string
  schoolInfo?: string
}

export const officialSchoolDirectory = 'https://www.mapleleafworldschool.com/china/schools'

// School links and galleries verified from the official Maple Leaf directories.
export const campusOfficialInfo: Record<string, CampusOfficialInfo | undefined> = {
  shenzhen: {
    officialWebsite: "https://www.mapleleafworldschool.com/china/schools/Shenzhen",
    officialGallery: "https://www.mapleleafworldschool.com/china/schools/Shenzhen/School-Gallery",
    imageSource: "https://irp.cdn-website.com/7fb40b83/dms3rep/multi/%E6%93%8D%E5%9C%BA-185e543a.jpg",
  },
  chongqing: {
    officialWebsite: "https://www.mapleleafworldschool.com/china/schools/Chongqing",
    officialGallery: "https://www.mapleleafworldschool.com/china/schools/Chongqing/School-Gallery",
    imageSource: "https://irp.cdn-website.com/7fb40b83/dms3rep/multi/opt/Chonqing-Campus-2880w.jpeg",
  },
  wuhan: {
    officialWebsite: "https://www.mapleleafworldschool.com/china/schools/Wuhan",
    officialGallery: "https://www.mapleleafworldschool.com/china/schools/Wuhan/School-Gallery",
  },
  shanghai: {
    officialWebsite: "https://www.mapleleafworldschool.com/china/schools/Shanghai",
    officialGallery: "https://www.mapleleafworldschool.com/china/schools/Shanghai/School-Gallery",
  },
  hainan: {
    officialWebsite: "https://www.mapleleafworldschool.com/china/schools/Hainan",
    officialGallery: "https://www.mapleleafworldschool.com/china/schools/Hainan/School-Gallery",
  },
  dalian: {
    officialWebsite: "https://www.mapleleafworldschool.com/china/schools/Dalian",
    officialGallery: "https://www.mapleleafworldschool.com/china/schools/Dalian/School-Gallery",
  },
  horinger: {
    officialWebsite: "https://www.mapleleafworldschool.com/china/schools/Hohhot",
    officialGallery: "https://www.mapleleafworldschool.com/china/schools/Hohhot/School-Gallery",
    campusImage: "/images/campuses/official/horinger.webp",
    imageSource: "https://irp.cdn-website.com/7fb40b83/dms3rep/multi/%E5%92%8C%E6%9E%97%E6%A0%BC%E5%B0%94.jpg",
    imageSourcePage: "https://www.mapleleafworldschool.com/china/schools/Hohhot/School-Gallery",
    schoolInfo: "Primary, middle and high school in Horinger New Area, Hohhot.",
  },
  "tianjin-teda": {
    officialWebsite: "https://www.mapleleafworldschool.com/china/schools/Tianjin-TEDA",
    officialGallery: "https://www.mapleleafworldschool.com/china/schools/Tianjin-TEDA/School-Gallery",
    schoolInfo: "Kindergarten through Grade 12, with day and boarding students.",
    campusImage: "/images/campuses/tianjin-teda.webp",
    imageSource: "https://irp.cdn-website.com/7fb40b83/dms3rep/multi/opt/tianjin-tedax-6f88a7e5-640w.jpeg",
  },
  "tianjin-huayuan": {
    officialWebsite: "https://www.mapleleafworldschool.com/china/schools/Tianjin-Huayuan",
    campusImage: "/images/campuses/official/tianjin-huayuan.webp",
    imageSource: "https://irp.cdn-website.com/7fb40b83/dms3rep/multi/opt/tianjin-huayuanx-2880w.jpeg",
    imageSourcePage: "https://www.mapleleafworldschool.com/china/schools/Tianjin-Huayuan",
    schoolInfo: "Primary and middle school in Tianjin’s Huayuan Industrial Park.",
  },
  jinan: {
    officialWebsite: "https://www.mapleleafworldschool.com/china/schools/Jinan",
    officialGallery: "https://www.mapleleafworldschool.com/china/schools/Jinan/School-Gallery",
    campusImage: "/images/campuses/official/jinan.webp",
    imageSource: "https://irp.cdn-website.com/7fb40b83/dms3rep/multi/opt/About-d8ee52fb-1920w.jpg",
    imageSourcePage: "https://www.mapleleafworldschool.com/china/schools/Jinan",
    schoolInfo: "Primary, middle and high school in Jinan’s Zhangqiu District.",
  },
  xian: {
    officialWebsite: "https://www.mapleleafworldschool.com/china/schools/Xian",
    officialGallery: "https://www.mapleleafworldschool.com/china/schools/Xian/School-Gallery",
    campusImage: "/images/campuses/official/xian.webp",
    imageSource: "https://irp.cdn-website.com/7fb40b83/dms3rep/multi/opt/the-xian-campusx-2880w.jpeg",
    imageSourcePage: "https://www.mapleleafworldschool.com/china/schools/Xian",
    schoolInfo: "Boarding school in the Xixian New Area, primarily serving high school students.",
  },
  luoyang: {
    officialWebsite: "https://www.mapleleafworldschool.com/china/schools/Luoyang",
    campusImage: "/images/campuses/official/luoyang.webp",
    imageSource: "https://irp.cdn-website.com/7fb40b83/dms3rep/multi/opt/the-henan-campusx-2880w.jpeg",
    imageSourcePage: "https://www.mapleleafworldschool.com/china/schools/Luoyang",
    schoolInfo: "Primary, middle and high school in Luoyang’s Yibin District.",
  },
  huaian: {
    officialWebsite: "https://www.mapleleafworldschool.com/china/schools/Huaian",
    campusImage: "/images/campuses/official/huaian.webp",
    imageSource: "https://irp.cdn-website.com/7fb40b83/dms3rep/multi/opt/Huaian-Campus-2880w.jpeg",
    imageSourcePage: "https://www.mapleleafworldschool.com/china/schools/Huaian",
    schoolInfo: "Primary and middle school in Huai’an’s Qingjiangpu District.",
  },
  yancheng: {
    officialWebsite: "https://www.mapleleafworldschool.com/china/schools/Yancheng",
    campusImage: "/images/campuses/official/yancheng.webp",
    imageSource: "https://irp.cdn-website.com/7fb40b83/dms3rep/multi/opt/Yancheng-High-School-708x708-96a3ac7c-2880w.jpeg",
    imageSourcePage: "https://www.mapleleafworldschool.com/china/schools/Yancheng",
    schoolInfo: "Primary, middle and high school in Yancheng’s Yandu District.",
  },
  zhenjiang: {
    officialWebsite: "https://www.mapleleafworldschool.com/china/schools/Zhenjiang",
    officialGallery: "https://www.mapleleafworldschool.com/china/schools/Zhenjiang/School-Gallery",
    campusImage: "/images/campuses/official/zhenjiang.webp",
    imageSource: "https://irp.cdn-website.com/7fb40b83/dms3rep/multi/opt/zhenjiang-2880w.jpeg",
    imageSourcePage: "https://www.mapleleafworldschool.com/china/schools/Zhenjiang",
    schoolInfo: "Primary, middle and high school. The campus opened in 2011.",
  },
  xiangyang: {
    officialWebsite: "https://www.mapleleafworldschool.com/china/schools/Xiangyang",
    schoolInfo: "Kindergarten, primary, middle and high school in the Xiangyang High-Tech Zone.",
  },
  huzhou: {
    officialWebsite: "https://www.mapleleafworldschool.com/china/schools/Huzhou",
    campusImage: "/images/campuses/official/huzhou.webp",
    imageSource: "https://irp.cdn-website.com/7fb40b83/dms3rep/multi/opt/Huzhou-2880w.jpeg",
    imageSourcePage: "https://www.mapleleafworldschool.com/china/schools/Huzhou",
    schoolInfo: "Kindergarten, primary and middle school in Huzhou’s Wuxing District.",
  },
  yiwu: {
    officialWebsite: "https://www.mapleleafworldschool.com/china/schools/Yiwu",
    campusImage: "/images/campuses/official/yiwu.webp",
    imageSource: "https://irp.cdn-website.com/7fb40b83/dms3rep/multi/opt/Yiwu-2880w.jpg",
    imageSourcePage: "https://www.mapleleafworldschool.com/china/schools/Yiwu",
    schoolInfo: "Kindergarten through high school, with a school for foreign nationals.",
  },
  luzhou: {
    officialWebsite: "https://www.mapleleafworldschool.com/china/schools/Luzhou",
    campusImage: "/images/campuses/official/luzhou.webp",
    imageSource: "https://irp.cdn-website.com/7fb40b83/dms3rep/multi/opt/%E6%B3%B8%E5%B7%9E-2880w.jpg",
    imageSourcePage: "https://www.mapleleafworldschool.com/china/schools/Luzhou",
    schoolInfo: "The Jiade school serves primary and middle school students in Jiangyang District.",
  },
  kingsley: {
    officialWebsite: "https://www.kingsley.edu.my/kis/",
    officialGallery: "https://www.kingsley.edu.my/kis/facilities-services/",
    campusImage: "/images/campuses/official/kingsley.webp",
    imageSource: "https://www.kingsley.edu.my/kis/wp-content/uploads/2023/07/12_SchoolField.jpg",
    imageSourcePage: "https://www.kingsley.edu.my/kis/facilities-services/",
    schoolInfo: "British curriculum from Early Years through A Levels.",
  },
  cis: {
    officialWebsite: "https://www.cis.edu.sg/",
    campusImage: "/images/campuses/official/cis.webp",
    imageSource: "https://images-sg.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtc2ciLCJrZXkiOiJjaXMtc2ctMDQtMTI5LXdlYnNpdGUtMjAyNS9jb250ZW50LzctQ29udGFjdC9iYW5uZXItQ0lTLWZhY2FkZS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6ImNlbnRlciIsIndpZHRoIjoyMDQ4LCJoZWlnaHQiOjExMTh9LCJxdWFsaXR5Ijo4NSwidG9Gb3JtYXQiOiJ3ZWJwIn19",
    imageSourcePage: "https://www.cis.edu.sg/contact/virtual-tour",
    schoolInfo: "Nursery through Grade 12 with International Baccalaureate programmes.",
  },
}
