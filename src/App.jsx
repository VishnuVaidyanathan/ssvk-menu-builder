import { useState, useCallback } from "react";

const MEAL_TEMPLATES = {
  "3-day-brahmin": {
    name: "3 நாள் பிராமண திருமணம்",
    nameEn: "3-Day Brahmin Marriage",
    days: [
      {
        day: 1,
        label: "நாள் 1",
        meals: [
          {
            id: "d1_coffee",
            time: "காலை 5 மணி",
            name: "காபி",
            items: [{ id: "d1_c1", text: "காபி", options: null, selected: true }],
          },
          {
            id: "d1_breakfast", guestCount: "125",
            time: "காலை டிபன் 7 மணி",
            name: "காலை டிபன்",
            items: [
              { id: "d1_b1", text: "அவல் கேசரி / பழ கேசரி / அசோகா அல்வா", options: ["அவல் கேசரி", "பழ கேசரி", "அசோகா அல்வா"], selected: "அவல் கேசரி" },
              { id: "d1_b2", text: "வெண்பொங்கல்", options: null, selected: true },
              { id: "d1_b3", text: "ரவா தோசை / வெஜ் ஊத்தாப்பம் / தோசை", options: ["ரவா தோசை", "வெஜ் ஊத்தாப்பம்", "தோசை"], selected: "ரவா தோசை" },
              { id: "d1_b4", text: "மைசூர் போண்டா / மெதுவடை", options: ["மைசூர் போண்டா", "மெதுவடை"], selected: "மைசூர் போண்டா" },
              { id: "d1_b5", text: "சட்னி", options: null, selected: true },
              { id: "d1_b6", text: "சாம்பார்", options: null, selected: true },
              { id: "d1_b7", text: "காபி, Tea", options: null, selected: true },
            ],
          },
          {
            id: "d1_lunch", guestCount: "150",
            time: "பகல் சாப்பாடு 12 மணி",
            name: "பகல் சாப்பாடு",
            items: [
              { id: "d1_l1", text: "சக்கரை பொங்கல் அல்லது பாயசம்", options: ["சக்கரை பொங்கல்", "பாயசம்"], selected: "சக்கரை பொங்கல்" },
              { id: "d1_l2", text: "மைசூர் பாக் / போளி / ஹார்லிக்ஸ் பர்பி / மிந்திரி கேக்", options: ["மைசூர் பாக்", "போளி", "ஹார்லிக்ஸ் பர்பி", "மிந்திரி கேக்"], selected: "மைசூர் பாக்" },
              { id: "d1_l3", text: "தயிர் பச்சடி", options: null, selected: true },
              { id: "d1_l4", text: "வாழைக்காய் கறி", options: null, selected: true },
              { id: "d1_l5", text: "பீன்ஸ் கறி அல்லது அவரைக்காய் கறி", options: ["பீன்ஸ் கறி", "அவரைக்காய் கறி"], selected: "பீன்ஸ் கறி" },
              { id: "d1_l6", text: "செள செள கூட்டு அல்லது பூசணி கூட்டு", options: ["செள செள கூட்டு", "பூசணி கூட்டு"], selected: "செள செள கூட்டு" },
              { id: "d1_l7", text: "சாம்பார்", options: null, selected: true },
              { id: "d1_l8", text: "மோர்க்குழம்பு", options: null, selected: true },
              { id: "d1_l9", text: "தக்காளி ரசம்", options: null, selected: true },
              { id: "d1_l10", text: "தேங்காய் சாதம் / புதினா சாதம்", options: ["தேங்காய் சாதம்", "புதினா சாதம்"], selected: "தேங்காய் சாதம்" },
              { id: "d1_l11", text: "மெது வடை, அப்பளம், பருப்பு, நெய்", options: null, selected: true },
              { id: "d1_l12", text: "தயிர், ஊறுகாய்", options: null, selected: true },
              { id: "d1_l13", text: "வெற்றிலை பாக்கு", options: null, selected: true },
            ],
          },
          {
            id: "d1_evening", guestCount: "200",
            time: "மாலை டிபன் 5 மணி",
            name: "மாலை டிபன்",
            items: [
              { id: "d1_e1", text: "கோதுமை அல்வா / பாதம் அல்வா", options: ["கோதுமை அல்வா", "பாதம் அல்வா"], selected: "கோதுமை அல்வா" },
              { id: "d1_e2", text: "தேங்காய் சேவை அல்லது லெமன் சேவை", options: ["தேங்காய் சேவை", "லெமன் சேவை"], selected: "தேங்காய் சேவை" },
              { id: "d1_e3", text: "வெஜிடபிள் சேவை அல்லது கிச்சடி", options: ["வெஜிடபிள் சேவை", "கிச்சடி"], selected: "வெஜிடபிள் சேவை" },
              { id: "d1_e4", text: "மினி தோசை அல்லது அடை அவியல் / ஆனியன் ஊத்தாப்பம்", options: ["மினி தோசை", "அடை அவியல்", "ஆனியன் ஊத்தாப்பம்"], selected: "மினி தோசை" },
              { id: "d1_e5", text: "உருளைக்கிழங்கு போண்டா அல்லது பட்டணம் பக்கோடா", options: ["உருளைக்கிழங்கு போண்டா", "பட்டணம் பக்கோடா"], selected: "உருளைக்கிழங்கு போண்டா" },
              { id: "d1_e6", text: "சட்னி & சம்பார்", options: null, selected: true },
              { id: "d1_e7", text: "காபி மற்றும் Tea", options: null, selected: true },
            ],
          },
          {
            id: "d1_dinner", guestCount: "400",
            time: "ஜானவாச டின்னர் இரவு 7 மணி",
            name: "ஜானவாச டின்னர்",
            items: [
              { id: "d1_d1", text: "தக்காளி சூப் அல்லது வெஜிடபுள் சூப்", options: ["தக்காளி சூப்", "வெஜிடபுள் சூப்"], selected: "தக்காளி சூப்" },
              { id: "d1_d2", text: "போளி / ஜாமூன் / ரசகுலா / பாசந்தி", options: ["போளி", "ஜாமூன்", "ரசகுலா", "பாசந்தி"], selected: "போளி" },
              { id: "d1_d3", text: "அக்கார வடிசல் / கல்கண்டு பாத்", options: ["அக்கார வடிசல்", "கல்கண்டு பாத்"], selected: "அக்கார வடிசல்" },
              { id: "d1_d4", text: "ருமாணி ரொட்டி And பன்னீர் பட்டர் மசாலா", options: null, selected: true },
              { id: "d1_d5", text: "பூரி அல்லது சப்பாத்தி - வெஜ் குருமா / சென்னா குருமா", options: ["பூரி - வெஜ் குருமா", "பூரி - சென்னா குருமா", "சப்பாத்தி - வெஜ் குருமா", "சப்பாத்தி - சென்னா குருமா"], selected: "பூரி - வெஜ் குருமா" },
              { id: "d1_d6", text: "விஜிடபிள் புலாவ் And தயிர் பச்சடி", options: null, selected: true },
              { id: "d1_d7", text: "பிசிபேளாபாத் சாதம்", options: null, selected: true },
              { id: "d1_d8", text: "கருவேப்பிலை சாதம் அல்லது மல்லி சாதம்", options: ["கருவேப்பிலை சாதம்", "மல்லி சாதம்"], selected: "கருவேப்பிலை சாதம்" },
              { id: "d1_d9", text: "சாதம் & ரசம்", options: null, selected: true },
              { id: "d1_d10", text: "உருளைக்கிழங்கு கறி அல்லது கோஸ்பட்டாணி கறி", options: ["உருளைக்கிழங்கு கறி", "கோஸ்பட்டாணி கறி"], selected: "உருளைக்கிழங்கு கறி" },
              { id: "d1_d11", text: "சிப்ஸ்-பப்படம்", options: null, selected: true },
              { id: "d1_d12", text: "பருப்பு வடை / காலிப்ளவர் 65", options: ["பருப்பு வடை", "காலிப்ளவர் 65"], selected: "பருப்பு வடை" },
              { id: "d1_d13", text: "தயிர் சாதம்", options: null, selected: true },
              { id: "d1_d14", text: "மோர் மிளகாய் & ஊறுகாய்", options: null, selected: true },
              { id: "d1_d15", text: "ஐஸ்கிரீம் / பாதம்பால்", options: ["ஐஸ்கிரீம்", "பாதம்பால்"], selected: "ஐஸ்கிரீம்" },
              { id: "d1_d16", text: "பீடா", options: null, selected: true },
            ],
          },
        ],
      },
      {
        day: 2,
        label: "நாள் 2 (முகூர்த்தம்)",
        meals: [
          {
            id: "d2_breakfast", guestCount: "250",
            time: "முகூர்த்த டிபன் 7 மணி",
            name: "முகூர்த்த டிபன்",
            items: [
              { id: "d2_b1", text: "அசோகா அல்வா / பைனாப்பிள் புட்டிங் / திருநெல்வேலி அல்வா / காசி அல்வா", options: ["அசோகா அல்வா", "பைனாப்பிள் புட்டிங்", "திருநெல்வேலி அல்வா", "காசி அல்வா"], selected: "அசோகா அல்வா" },
              { id: "d2_b2", text: "ரவா பொங்கல் / கிச்சடி", options: ["ரவா பொங்கல்", "கிச்சடி"], selected: "ரவா பொங்கல்" },
              { id: "d2_b3", text: "இட்லி, மிளகாய்பொடி / பொடி இட்லி", options: ["இட்லி, மிளகாய்பொடி", "பொடி இட்லி"], selected: "இட்லி, மிளகாய்பொடி" },
              { id: "d2_b4", text: "பூரி மசால் / மசால் தோசை / வெஜ் ஊத்தப்பம்", options: ["பூரி மசால்", "மசால் தோசை", "வெஜ் ஊத்தப்பம்"], selected: "பூரி மசால்" },
              { id: "d2_b5", text: "ஸ்பெஷல் வடை அல்லது சாம்பார் வடை", options: ["ஸ்பெஷல் வடை", "சாம்பார் வடை"], selected: "ஸ்பெஷல் வடை" },
              { id: "d2_b6", text: "தேங்காய் சட்னி, கார சட்னி, சாம்பார்", options: null, selected: true },
              { id: "d2_b7", text: "காபி - Tea", options: null, selected: true },
            ],
          },
          {
            id: "d2_lunch", guestCount: "300",
            time: "முகூர்த்த சாப்பாடு 11 மணி",
            name: "முகூர்த்த சாப்பாடு",
            items: [
              { id: "d2_l1", text: "கடலை பருப்பு பாசிப்பருப்பு பாயசம் அல்லது பால் பாயசம்", options: ["கடலை பருப்பு பாசிப்பருப்பு பாயசம்", "பால் பாயசம்"], selected: "கடலை பருப்பு பாசிப்பருப்பு பாயசம்" },
              { id: "d2_l2", text: "லட்டு அல்லது ஜாங்கிரி அல்லது பதிர்பேணி", options: ["லட்டு", "ஜாங்கிரி", "பதிர்பேணி"], selected: "லட்டு" },
              { id: "d2_l3", text: "தயிர் பச்சடி", options: null, selected: true },
              { id: "d2_l4", text: "ஸ்வீட் பச்சடி", options: null, selected: true },
              { id: "d2_l5", text: "வாழைக்காய் பொடிமாஸ் அல்லது கத்தரிக்காய் காரகறி", options: ["வாழைக்காய் பொடிமாஸ்", "கத்தரிக்காய் காரகறி"], selected: "வாழைக்காய் பொடிமாஸ்" },
              { id: "d2_l6", text: "பீன்ஸ் பருப்பு உசிலி", options: null, selected: true },
              { id: "d2_l7", text: "அவியல் அல்லது ரசவாங்கி", options: ["அவியல்", "ரசவாங்கி"], selected: "அவியல்" },
              { id: "d2_l8", text: "பிட்ளை சாம்பார்", options: null, selected: true },
              { id: "d2_l9", text: "மோர்க்குழம்பு அல்லது வத்தல் குழம்பு", options: ["மோர்க்குழம்பு", "வத்தல் குழம்பு"], selected: "மோர்க்குழம்பு" },
              { id: "d2_l10", text: "மைசூர் ரசம்", options: null, selected: true },
              { id: "d2_l11", text: "புளியோதரை அல்லது மல்லி சாதம்", options: ["புளியோதரை", "மல்லி சாதம்"], selected: "புளியோதரை" },
              { id: "d2_l12", text: "மசால் வடை அல்லது திருமால் வடை", options: ["மசால் வடை", "திருமால் வடை"], selected: "மசால் வடை" },
              { id: "d2_l13", text: "சிப்ஸ்", options: null, selected: true },
              { id: "d2_l14", text: "பருப்பு, நெய், அப்பளம், தயிர், ஊறுகாய்", options: null, selected: true },
              { id: "d2_l15", text: "ஐஸ்கிரீம் & பீடா", options: null, selected: true },
            ],
          },
          {
            id: "d2_evening", guestCount: "100",
            time: "மாலை டிபன் 5 மணி",
            name: "மாலை டிபன்",
            items: [
              { id: "d2_e1", text: "சோன்பப்டி / போர்ன்விடா பர்பி", options: ["சோன்பப்டி", "போர்ன்விடா பர்பி"], selected: "சோன்பப்டி" },
              { id: "d2_e2", text: "விஜிடபிள் கட்லெட் / தூள் பஜ்ஜி", options: ["விஜிடபிள் கட்லெட்", "தூள் பஜ்ஜி"], selected: "விஜிடபிள் கட்லெட்" },
              { id: "d2_e3", text: "குழிபணியாரம், புதினா சட்னி", options: null, selected: true },
              { id: "d2_e4", text: "காபி - டீ", options: null, selected: true },
            ],
          },
          {
            id: "d2_dinner", guestCount: "100",
            time: "இரவு சாப்பாடு 7 மணி",
            name: "இரவு சாப்பாடு",
            items: [
              { id: "d2_dn1", text: "கல்கண்டுபாத் / பாதாம் அல்வா / மிந்திரி கேக்", options: ["கல்கண்டுபாத்", "பாதாம் அல்வா", "மிந்திரி கேக்"], selected: "கல்கண்டுபாத்" },
              { id: "d2_dn2", text: "சப்பாத்தி டால்", options: null, selected: true },
              { id: "d2_dn3", text: "பொடி தோசை, சட்னி, சாம்பார்", options: null, selected: true },
              { id: "d2_dn4", text: "சம்பா சாதம்", options: null, selected: true },
              { id: "d2_dn5", text: "வாங்கிபாத் / வத்தல் குழம்பு சாதம்", options: ["வாங்கிபாத்", "வத்தல் குழம்பு சாதம்"], selected: "வாங்கிபாத்" },
              { id: "d2_dn6", text: "பூந்தி பச்சடி", options: null, selected: true },
              { id: "d2_dn7", text: "கத்தரிக்காய் காரக்கறி", options: null, selected: true },
              { id: "d2_dn8", text: "சேப்பங் கிழங்கு டோஸ்ட்", options: null, selected: true },
              { id: "d2_dn9", text: "சிப்ஸ்", options: null, selected: true },
              { id: "d2_dn10", text: "தயிர்சாதம், ஊறுகாய்", options: null, selected: true },
            ],
          },
        ],
      },
      {
        day: 3,
        label: "நாள் 3",
        meals: [
          {
            id: "d3_breakfast", guestCount: "75",
            time: "காலை சாப்பாடு 10 மணி",
            name: "காலை சாப்பாடு",
            items: [
              { id: "d3_b1", text: "அவல் பாயசம்", options: null, selected: true },
              { id: "d3_b2", text: "லட்டு", options: null, selected: true },
              { id: "d3_b3", text: "பச்சடி, பருப்பு துவையல்", options: null, selected: true },
              { id: "d3_b4", text: "உருளை பொடிமாஸ்", options: null, selected: true },
              { id: "d3_b5", text: "பொரித்தக் கூட்டு", options: null, selected: true },
              { id: "d3_b6", text: "வற்றல் குழம்பு அல்லது மிளகு குழம்பு", options: ["வற்றல் குழம்பு", "மிளகு குழம்பு"], selected: "வற்றல் குழம்பு" },
              { id: "d3_b7", text: "ஜீரக ரசம்", options: null, selected: true },
              { id: "d3_b8", text: "தயிர் வடை", options: null, selected: true },
              { id: "d3_b9", text: "வடாம்", options: null, selected: true },
              { id: "d3_b10", text: "பருப்பு, நெய்", options: null, selected: true },
              { id: "d3_b11", text: "தயிர்", options: null, selected: true },
              { id: "d3_b12", text: "ஊறுகாய்", options: null, selected: true },
            ],
          },
          {
            id: "d3_packed", guestCount: "50",
            time: "PACKED FOODS (BOX)",
            name: "பேக்டு உணவு",
            items: [
              { id: "d3_p1", text: "இட்லி மிளகாய் பொடி தடவி", options: null, selected: true },
              { id: "d3_p2", text: "புளியஞ்சாதம் And சிப்ஸ்", options: null, selected: true },
              { id: "d3_p3", text: "தயிர் சாதம் And ஊறுகாய்", options: null, selected: true },
              { id: "d3_p4", text: "மோர்மிளகாய்", options: null, selected: true },
              { id: "d3_p5", text: "ஊறுகாய்", options: null, selected: true },
            ],
          },
        ],
      },
    ],
  },
  "1-day": {
    name: "1 நாள் திருமணம்",
    nameEn: "1-Day Marriage",
    days: [
      {
        day: 1,
        label: "மாலை-இரவு",
        meals: [
          {
            id: "o1_evening", guestCount: "100",
            time: "மாலை 4.00 மணி",
            name: "மாலை டிபன்",
            items: [
              { id: "o1_e1", text: "கோதுமை அல்வா / கேசரி / முந்திரி கேக்", options: ["கோதுமை அல்வா", "கேசரி", "முந்திரி கேக்"], selected: "கோதுமை அல்வா" },
              { id: "o1_e2", text: "பட்டணம் பக்கோடா / பஜ்ஜி / மைசூர் போண்டா", options: ["பட்டணம் பக்கோடா", "பஜ்ஜி", "மைசூர் போண்டா"], selected: "பட்டணம் பக்கோடா" },
              { id: "o1_e3", text: "சட்னி", options: null, selected: true },
              { id: "o1_e4", text: "காபி - டீ", options: null, selected: true },
            ],
          },
          {
            id: "o1_dinner", guestCount: "400",
            time: "இரவு 7.30 மணி",
            name: "இரவு சாப்பாடு",
            items: [
              { id: "o1_d1", text: "தக்காளி சூப் / வெஜ் சூப்", options: ["தக்காளி சூப்", "வெஜ் சூப்"], selected: "தக்காளி சூப்" },
              { id: "o1_d2", text: "அக்கார வடிசல் / போளி / ஜாமூன் / ரசகுல்லா / பாசந்தி", options: ["அக்கார வடிசல்", "போளி", "ஜாமூன்", "ரசகுல்லா", "பாசந்தி"], selected: "அக்கார வடிசல்" },
              { id: "o1_d3", text: "புல்கா சப்பாத்தி & பன்னீர் பட்டர் மசாலா", options: null, selected: true },
              { id: "o1_d4", text: "மினி பூரி - சென்னா குருமா", options: null, selected: true },
              { id: "o1_d5", text: "இடியாப்பம் - சொதி", options: null, selected: true },
              { id: "o1_d6", text: "மினி சாம்பார் இட்லி / உளுத்தப்பம் / ரவா தோசை", options: ["மினி சாம்பார் இட்லி", "உளுத்தப்பம்", "ரவா தோசை"], selected: "மினி சாம்பார் இட்லி" },
              { id: "o1_d7", text: "சேமியா ரவா கிச்சடி", options: null, selected: true },
              { id: "o1_d8", text: "சட்னி, காரசட்னி & சாம்பார்", options: null, selected: true },
              { id: "o1_d9", text: "சில்லி பரோட்டா", options: null, selected: true },
              { id: "o1_d10", text: "தயிர் சாதம் & மோர் மிளகாய் & ஊறுகாய்", options: null, selected: true },
              { id: "o1_d11", text: "ஐஸ்கிரீம் / பீடா / பாதாம்பால்", options: ["ஐஸ்கிரீம்", "பீடா", "பாதாம்பால்"], selected: "ஐஸ்கிரீம்" },
            ],
          },
        ],
      },
      {
        day: 2,
        label: "காலை-பகல்",
        meals: [
          {
            id: "o2_coffee",
            time: "காலை 5.00 மணி",
            name: "காபி",
            items: [{ id: "o2_c1", text: "காபி", options: null, selected: true }],
          },
          {
            id: "o2_breakfast", guestCount: "300",
            time: "காலை 7.00 மணி டிபன்",
            name: "காலை டிபன்",
            items: [
              { id: "o2_b1", text: "சிபுருட் பழ கேசரி / அசோகா அல்வா / காசி அல்வா", options: ["சிபுருட் பழ கேசரி", "அசோகா அல்வா", "காசி அல்வா"], selected: "சிபுருட் பழ கேசரி" },
              { id: "o2_b2", text: "இட்லி & மிளகாய் பொடி", options: null, selected: true },
              { id: "o2_b3", text: "வெண் பொங்கல் / ரவா பொங்கல்", options: ["வெண் பொங்கல்", "ரவா பொங்கல்"], selected: "வெண் பொங்கல்" },
              { id: "o2_b4", text: "ஸ்பெஷல் வடை / சாம்பார் வடை", options: ["ஸ்பெஷல் வடை", "சாம்பார் வடை"], selected: "ஸ்பெஷல் வடை" },
              { id: "o2_b5", text: "பூரி மசால்", options: null, selected: true },
              { id: "o2_b6", text: "வெஜ் ஊத்தப்பம் / மசாலா தோசை / செட் தோசை", options: ["வெஜ் ஊத்தப்பம்", "மசாலா தோசை", "செட் தோசை"], selected: "வெஜ் ஊத்தப்பம்" },
              { id: "o2_b7", text: "சட்னி / கார சட்னி / மல்லி சட்னி", options: null, selected: true },
              { id: "o2_b8", text: "சாம்பார் - கடப்பா குருமா", options: null, selected: true },
              { id: "o2_b9", text: "காபி & டீ", options: null, selected: true },
            ],
          },
          {
            id: "o2_lunch", guestCount: "300",
            time: "பகல் 11.00 மணி",
            name: "பகல் சாப்பாடு (முகூர்த்தம்)",
            items: [
              { id: "o2_l1", text: "சேமியா பால் பாயசம் / பருப்பு பாயசம்", options: ["சேமியா பால் பாயசம்", "பருப்பு பாயசம்"], selected: "சேமியா பால் பாயசம்" },
              { id: "o2_l2", text: "டிரை ஜாமூன் / லட்டு / ஜாங்கிரி / பதிர்பேணி", options: ["டிரை ஜாமூன்", "லட்டு", "ஜாங்கிரி", "பதிர்பேணி"], selected: "டிரை ஜாமூன்" },
              { id: "o2_l3", text: "வெஜ் பிரியாணி / தயிர் பச்சடி", options: null, selected: true },
              { id: "o2_l4", text: "சேனை சாப்ஸ் / உருளை வெங்காய வறுவல்", options: ["சேனை சாப்ஸ்", "உருளை வெங்காய வறுவல்"], selected: "சேனை சாப்ஸ்" },
              { id: "o2_l5", text: "பீன்ஸ் பருப்பு உசிலி / கோஸ் பீன்ஸ் கேரட் பொரியல்", options: ["பீன்ஸ் பருப்பு உசிலி", "கோஸ் பீன்ஸ் கேரட் பொரியல்"], selected: "பீன்ஸ் பருப்பு உசிலி" },
              { id: "o2_l6", text: "உருளை பால் கூட்டு / அவியல்", options: ["உருளை பால் கூட்டு", "அவியல்"], selected: "உருளை பால் கூட்டு" },
              { id: "o2_l7", text: "முருங்கை சாம்பார்", options: null, selected: true },
              { id: "o2_l8", text: "சின்ன வெங்காய கார குழம்பு / மோர் குழம்பு", options: ["சின்ன வெங்காய கார குழம்பு", "மோர் குழம்பு"], selected: "சின்ன வெங்காய கார குழம்பு" },
              { id: "o2_l9", text: "தக்காளி பூண்டு ரசம்", options: null, selected: true },
              { id: "o2_l10", text: "மசால் வடை", options: null, selected: true },
              { id: "o2_l11", text: "பருப்பு நெய் அப்பளம்", options: null, selected: true },
              { id: "o2_l12", text: "தயிர் ஊறுகாய்", options: null, selected: true },
              { id: "o2_l13", text: "ஐஸ்கிரீம் - பீடா", options: null, selected: true },
            ],
          },
        ],
      },
    ],
  },
};

const ARRANGEMENTS_TEMPLATES = {
  "3-day-brahmin": {
    sivaVishnu: {
      name: "சிவாவிஷ்ணு ஏற்பாடுகள்",
      items: [
        { id: "sv1", text: "கோலம்", checked: false },
        { id: "sv2", text: "நாதஸ்வரம்", checked: false },
        { id: "sv3", text: "வாழைமரம் (மண்டபம் + வீடு, திருச்சி மட்டும்)", checked: false },
        { id: "sv4", text: "புஷ்பம், மாலை, தலைக்கு பூ", checked: false },
        { id: "sv5", text: "ஜானவாச கார்", checked: false },
        { id: "sv6", text: "வைதீக சாமான்கள்", checked: false },
        { id: "sv7", text: "பட்டுபாய், குடை, ஸ்டிக், புஸ்தகம், விசிறி", checked: false },
        { id: "sv8", text: "நிச்சயதார்த்த பழ தட்டுகள், ஓலைச்சுவடி", checked: false },
        { id: "sv9", text: "காஸ்மெடிக் செட் - 3", checked: false },
        { id: "sv10", text: "ரூம் செட் (Optional)", checked: false },
        { id: "sv11", text: "தாம்பூல பை", checked: false },
        { id: "sv12", text: "சீர்பக்ஷணம் - விநியோக பக்ஷணம்", checked: false },
        { id: "sv13", text: "அங்குமணி சாமான்கள்", checked: false },
        { id: "sv14", text: "மெகந்தி (விரதம் காலை மட்டும்) – Welcome lady (Reception மற்றும் முகூர்த்தம்)", checked: false },
        { id: "sv15", text: "காபி ஸ்டால் - Juice ஸ்டால்", checked: false },
        { id: "sv16", text: "Catering - Service - Transport", checked: false },
      ],
    },
    party: {
      name: "பெண் வீட்டார் ஏற்பாடுகள்",
      items: [
        { id: "pt1", text: "கல்யாண மண்டபம், மண்டப Bills, Gas 50%", checked: false },
        { id: "pt2", text: "மண்டப டெக்கரேஷன்", checked: false },
        { id: "pt3", text: "வாசல் பந்தல்", checked: false },
        { id: "pt4", text: "Back Drop – Name Board", checked: false },
        { id: "pt5", text: "Lightings – ஜெனரேட்டர்", checked: false },
        { id: "pt6", text: "சாஸ்திரிகள் சம்பாவனை & நாந்தி வேஷ்டி", checked: false },
        { id: "pt7", text: "போட்டோ & விடியோ", checked: false },
        { id: "pt8", text: "ஊஞ்சல் பாத்திரங்கள்", checked: false },
        { id: "pt9", text: "காசியாத்திரை சப்பல்", checked: false },
        { id: "pt10", text: "மணமகள் அலங்கார நிபுணர்", checked: false },
        { id: "pt11", text: "கார், வேன், பஸ் வசதிகள்", checked: false },
      ],
    },
  },
  "1-day": {
    sivaVishnu: {
      name: "சிவாவிஷ்ணு ஏற்பாடுகள்",
      subtitle: "தேவைக்கு ஏற்ப அமைத்து தரப்படும்",
      items: [
        { id: "sv1d1", text: "கோலம்", checked: false },
        { id: "sv1d2", text: "நாதஸ்வரம்", checked: false },
        { id: "sv1d3", text: "வாழைமரம் (மண்டபம் + வீடு, திருச்சி மட்டும்)", checked: false },
        { id: "sv1d4", text: "புஷ்பம், மாலை, தலைக்கு பூ", checked: false },
        { id: "sv1d5", text: "அய்யர் சாமான்கள்", checked: false },
        { id: "sv1d6", text: "தாம்பூல பை", checked: false },
        { id: "sv1d7", text: "பலகார குடம் / பக்ஷணம்", checked: false },
        { id: "sv1d8", text: "Welcome lady (Reception மற்றும் முகூர்த்தம்)", checked: false },
        { id: "sv1d9", text: "காபி ஸ்டால் - Juice ஸ்டால்", checked: false },
        { id: "sv1d10", text: "Catering - Service - Transport", checked: false },
      ],
    },
    party: {
      name: "Party ஏற்பாடுகள்",
      items: [
        { id: "pt1d1", text: "கல்யாண மண்டபம், மண்டப Bills, Gas 50%", checked: false },
        { id: "pt1d2", text: "மண்டப டெக்கரேஷன்", checked: false },
        { id: "pt1d3", text: "வாசல் பந்தல்", checked: false },
        { id: "pt1d4", text: "Back Drop – Name Board", checked: false },
        { id: "pt1d5", text: "Lightings – ஜெனரேட்டர்", checked: false },
        { id: "pt1d6", text: "சாஸ்திரிகள் சம்பாவனை", checked: false },
        { id: "pt1d7", text: "போட்டோ & வீடியோ", checked: false },
        { id: "pt1d8", text: "மணமகள் அலங்கார நிபுணர்", checked: false },
        { id: "pt1d9", text: "கார், வேன், பஸ் வசதிகள்", checked: false },
      ],
    },
  },
};

const BAKSHANAM_TEMPLATE = {
  seer: {
    name: "சீர் பக்ஷணம் (5 in 1)",
    sides: [
      {
        id: "groom",
        label: "மாப்பிள்ளை வீடு",
        quantity: "",
        items: [
          { id: "gs1", text: "7 சுத்து முறுக்கு", selected: true },
          { id: "gs2", text: "சீர் முள்ளு முறுக்கு", selected: true },
          { id: "gs3", text: "சீர் அதிரசம்", selected: true },
          { id: "gs4", text: "சீர் லாடு", selected: true },
          { id: "gs5", text: "சீர் மைசூர்பாகு", selected: true },
        ],
      },
      {
        id: "bride",
        label: "பெண் வீடு",
        quantity: "",
        items: [
          { id: "bs1", text: "7 சுத்து முறுக்கு / 5 சுத்து முறுக்கு", options: ["7 சுத்து முறுக்கு", "5 சுத்து முறுக்கு"], selected: "7 சுத்து முறுக்கு" },
          { id: "bs2", text: "சீர் முள்ளு முறுக்கு", selected: true },
          { id: "bs3", text: "சீர் அதிரசம்", selected: true },
          { id: "bs4", text: "சீர் லாடு", selected: true },
          { id: "bs5", text: "சீர் மைசூர்பாகு", selected: true },
        ],
      },
    ],
  },
  viniyogam: {
    name: "விநியோக பக்ஷணம் (2 in 1)",
    sides: [
      {
        id: "groom",
        label: "மாப்பிள்ளை வீடு",
        quantity: "",
        items: [
          { id: "vg1", text: "5 சுத்து முறுக்கு", selected: true },
          { id: "vg2", text: "லட்டு", selected: true },
        ],
      },
      {
        id: "bride",
        label: "பெண் வீடு",
        quantity: "",
        items: [
          { id: "vb1", text: "5 சுத்து முறுக்கு", selected: true },
          { id: "vb2", text: "லட்டு", selected: true },
        ],
      },
    ],
  },
  paruppuThengai: {
    name: "பருப்பு தேங்காய்",
    items: [
      { id: "pt1", text: "தேன்குழல் (மனோகரம்)", qty: "", selected: true },
      { id: "pt2", text: "நிலக்கடலை", qty: "", selected: true },
      { id: "pt3", text: "பூந்தி", qty: "", selected: true },
      { id: "pt4", text: "மிந்திரி / பர்பி / பிஸ்கட்", qty: "", selected: true },
      { id: "pt5", text: "ஆசீர்வாத பருப்பு தேங்காய்", qty: "", selected: true },
      { id: "pt6", text: "திரட்டுப்பால்", qty: "", selected: true },
    ],
  },
};

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function OptionSelector({ item, onSelect }) {
  if (!item.options) return null;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "6px" }}>
      {item.options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          style={{
            padding: "4px 12px",
            borderRadius: "20px",
            border: item.selected === opt ? "2px solid #b8860b" : "1px solid #ddd",
            background: item.selected === opt ? "linear-gradient(135deg, #fff8e1, #ffe0b2)" : "#fafafa",
            color: item.selected === opt ? "#7c5e10" : "#666",
            fontWeight: item.selected === opt ? "700" : "400",
            fontSize: "13px",
            cursor: "pointer",
            transition: "all 0.2s",
            fontFamily: "'Noto Sans Tamil', sans-serif",
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function MealSection({ meal, onToggleItem, onSelectOption, onAddItem, onRemoveCustom, onGuestCountChange }) {
  const [showAdd, setShowAdd] = useState(false);
  const [newItem, setNewItem] = useState("");

  const handleAdd = () => {
    if (newItem.trim()) {
      onAddItem(meal.id, newItem.trim());
      setNewItem("");
      setShowAdd(false);
    }
  };

  return (
    <div style={{
      marginBottom: "16px",
      background: "white",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      border: "1px solid #f0e6d3",
    }}>
      <div style={{
        background: "linear-gradient(135deg, #8b1a1a, #c0392b)",
        padding: "10px 16px",
        color: "white",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontWeight: "700", fontSize: "14px", fontFamily: "'Noto Sans Tamil', sans-serif" }}>
            {meal.name}
          </span>
          <span style={{ fontSize: "12px", opacity: 0.9 }}>{meal.time}</span>
        </div>
        {meal.name !== "காபி" && (
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
          <span style={{ fontSize: "12px", opacity: 0.9 }}>நபர்:</span>
          <input
            type="number"
            value={meal.guestCount || ""}
            onChange={(e) => onGuestCountChange(meal.id, e.target.value)}
            placeholder="300"
            style={{
              width: "80px",
              padding: "4px 8px",
              borderRadius: "6px",
              border: "1px solid rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.15)",
              color: "white",
              fontSize: "14px",
              fontWeight: "700",
              outline: "none",
              textAlign: "center",
            }}
          />
          <span style={{ fontSize: "11px", opacity: 0.7 }}>விருந்தினர்</span>
        </div>
        )}
      </div>
      <div style={{ padding: "12px 16px" }}>
        {meal.items.map((item) => (
          <div key={item.id} style={{
            padding: "8px 0",
            borderBottom: "1px solid #f5f0eb",
            opacity: item.selected === false ? 0.4 : 1,
          }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <button
                onClick={() => onToggleItem(meal.id, item.id)}
                style={{
                  width: "22px",
                  height: "22px",
                  minWidth: "22px",
                  borderRadius: "4px",
                  border: item.selected !== false ? "2px solid #b8860b" : "2px solid #ccc",
                  background: item.selected !== false ? "#b8860b" : "white",
                  color: "white",
                  fontSize: "14px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2px",
                  padding: 0,
                }}
              >
                {item.selected !== false && "✓"}
              </button>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: "14px",
                  color: "#333",
                  fontFamily: "'Noto Sans Tamil', sans-serif",
                  lineHeight: 1.5,
                }}>
                  {item.options ? (
                    <span style={{ fontWeight: "600" }}>
                      {typeof item.selected === "string" ? item.selected : item.text}
                    </span>
                  ) : (
                    <span>{item.text}</span>
                  )}
                  {item.custom && (
                    <button
                      onClick={() => onRemoveCustom(meal.id, item.id)}
                      style={{
                        marginLeft: "8px",
                        background: "none",
                        border: "none",
                        color: "#e74c3c",
                        cursor: "pointer",
                        fontSize: "16px",
                        padding: "0 4px",
                      }}
                    >
                      ✕
                    </button>
                  )}
                </div>
                <OptionSelector item={item} onSelect={(opt) => onSelectOption(meal.id, item.id, opt)} />
              </div>
            </div>
          </div>
        ))}
        {showAdd ? (
          <div style={{ display: "flex", gap: "8px", marginTop: "10px", alignItems: "center" }}>
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAdd()}
              placeholder="புதிய உணவு..."
              style={{
                flex: 1,
                padding: "8px 12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "14px",
                fontFamily: "'Noto Sans Tamil', sans-serif",
                outline: "none",
              }}
              autoFocus
            />
            <button onClick={handleAdd} style={{
              padding: "8px 16px",
              background: "#b8860b",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: "600",
            }}>
              சேர்
            </button>
            <button onClick={() => { setShowAdd(false); setNewItem(""); }} style={{
              padding: "8px 12px",
              background: "#eee",
              color: "#666",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "13px",
            }}>
              ✕
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowAdd(true)}
            style={{
              marginTop: "8px",
              padding: "6px 14px",
              background: "none",
              border: "1px dashed #b8860b",
              borderRadius: "8px",
              color: "#b8860b",
              cursor: "pointer",
              fontSize: "13px",
              fontFamily: "'Noto Sans Tamil', sans-serif",
            }}
          >
            + உணவு சேர்க்க
          </button>
        )}
      </div>
    </div>
  );
}

function generatePDFContent(template, customerName, mandapam, customerPhone, startDate, endDate, arrangements, bakshanam, templateKey) {
  let content = "";
  content += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
  content += "       ஸ்ரீ சிவா விஷ்ணு கேட்டரிங்\n";
  content += "    HIGH CLASS CATERING & MARRIAGE SERVICES\n";
  content += "       📞 9842408584 | 8248066570\n";
  content += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";

  if (customerName) content += `நபர்      : ${customerName}\n`;
  if (mandapam) content += `மண்டபம்  : ${mandapam}\n`;
  if (customerPhone) content += `தொலைபேசி : ${customerPhone}\n`;
  if (startDate && endDate) {
    content += `தேதி      : ${startDate} முதல் ${endDate} வரை\n`;
  } else if (startDate) {
    content += `தேதி      : ${startDate}\n`;
  }
  
  const templateLabel = templateKey === "3-day-brahmin" ? "3 நாள் பிராமண திருமணம்" : "1 நாள் திருமணம்";
  content += `வகை      : ${templateLabel}\n`;
  content += "\n";

  template.days.forEach((day) => {
    content += `\n▬▬▬ ${day.label} ▬▬▬\n\n`;
    day.meals.forEach((meal) => {
      const guestLine = meal.guestCount ? `     நபர்: ${meal.guestCount}` : "";
      content += `${meal.time}${guestLine}\n`;
      content += "─────────────────────────\n";
      meal.items.forEach((item) => {
        if (item.selected === false) return;
        const displayText = item.options && typeof item.selected === "string" ? item.selected : item.text;
        content += `  ◆ ${displayText}\n`;
      });
      content += "\n";
    });
  });

  // Bakshanam (only for 3-day)
  if (templateKey === "3-day-brahmin") {
    content += "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    content += "              பக்ஷணம்\n";
    content += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    
    content += `${bakshanam.seer.name} :\n`;
    content += "─────────────────────────\n";
    bakshanam.seer.sides.forEach((side) => {
      const qtyStr = side.quantity ? ` — எண்ணிக்கை: ${side.quantity}` : "";
      content += `  【${side.label}${qtyStr}】\n`;
      side.items.forEach((item) => {
        if (item.selected === false) return;
        const txt = item.options && typeof item.selected === "string" ? item.selected : item.text;
        content += `    ◆ ${txt}\n`;
      });
    });
    content += "\n";

    content += `${bakshanam.viniyogam.name} :\n`;
    content += "─────────────────────────\n";
    bakshanam.viniyogam.sides.forEach((side) => {
      const qtyStr = side.quantity ? ` — எண்ணிக்கை: ${side.quantity}` : "";
      content += `  【${side.label}${qtyStr}】\n`;
      side.items.forEach((item) => {
        if (item.selected === false) return;
        const txt = item.options && typeof item.selected === "string" ? item.selected : item.text;
        content += `    ◆ ${txt}\n`;
      });
    });
    content += "\n";

    content += `${bakshanam.paruppuThengai.name} :\n`;
    content += "─────────────────────────\n";
    bakshanam.paruppuThengai.items.forEach((item) => {
      if (item.selected === false) return;
      const txt = item.options && typeof item.selected === "string" ? item.selected : item.text;
      const qtyStr = item.qty ? ` — ${item.qty}` : "";
      content += `  ◆ ${txt}${qtyStr}\n`;
    });
    content += "\n";
  }

  // Arrangements - show all items with status
  content += "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
  content += "            ஏற்பாடுகள்\n";
  content += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
  ["sivaVishnu", "party"].forEach(sectionKey => {
    const section = arrangements[sectionKey];
    content += `${section.name} :\n`;
    content += "─────────────────────────\n";
    section.items.forEach((item) => {
      const mark = item.checked ? "✅" : "⬜";
      content += `  ${mark} ${item.text}\n`;
    });
    content += "\n";
  });

  content += "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
  content += "  ஸ்ரீ சிவா விஷ்ணு கேட்டரிங் காண்ட்ராக்ட்ஸ்\n";
  content += "  📞 9842408584 | 8248066570\n";
  content += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";

  return content;
}

function BakshanamCheckItem({ item, onToggle, onSelectOption }) {
  return (
    <div style={{ padding: "8px 0", borderBottom: "1px solid #f5f0eb", opacity: item.selected === false ? 0.4 : 1 }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
        <button
          onClick={() => onToggle(item.id)}
          style={{
            width: "22px", height: "22px", minWidth: "22px", borderRadius: "4px",
            border: item.selected !== false ? "2px solid #b8860b" : "2px solid #ccc",
            background: item.selected !== false ? "#b8860b" : "white",
            color: "white", fontSize: "14px", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            marginTop: "2px", padding: 0,
          }}
        >
          {item.selected !== false && "✓"}
        </button>
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: "14px", color: "#333", fontFamily: "'Noto Sans Tamil', sans-serif", fontWeight: item.options ? "600" : "400" }}>
            {item.options && typeof item.selected === "string" ? item.selected : item.text}
          </span>
          {item.custom && (
            <button onClick={() => onToggle(item.id, true)} style={{ marginLeft: "8px", background: "none", border: "none", color: "#e74c3c", cursor: "pointer", fontSize: "16px", padding: "0 4px" }}>✕</button>
          )}
          {item.options && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "6px" }}>
              {item.options.map((opt) => (
                <button key={opt} onClick={() => onSelectOption(item.id, opt)} style={{
                  padding: "4px 12px", borderRadius: "20px",
                  border: item.selected === opt ? "2px solid #b8860b" : "1px solid #ddd",
                  background: item.selected === opt ? "linear-gradient(135deg, #fff8e1, #ffe0b2)" : "#fafafa",
                  color: item.selected === opt ? "#7c5e10" : "#666",
                  fontWeight: item.selected === opt ? "700" : "400",
                  fontSize: "13px", cursor: "pointer", fontFamily: "'Noto Sans Tamil', sans-serif",
                }}>{opt}</button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BakshanamSection({ bakshanam, onChange }) {
  const [addingTo, setAddingTo] = useState(null);
  const [newItem, setNewItem] = useState("");

  const toggleItem = (sectionKey, sideId, itemId, isRemove) => {
    const next = deepClone(bakshanam);
    const section = next[sectionKey];
    if (sideId && section.sides) {
      const side = section.sides.find(s => s.id === sideId);
      if (isRemove) {
        side.items = side.items.filter(i => i.id !== itemId);
      } else {
        const item = side.items.find(i => i.id === itemId);
        if (item) {
          if (item.options) item.selected = item.selected === false ? item.options[0] : false;
          else item.selected = !item.selected;
        }
      }
    } else {
      if (isRemove) {
        section.items = section.items.filter(i => i.id !== itemId);
      } else {
        const item = section.items.find(i => i.id === itemId);
        if (item) {
          if (item.options) item.selected = item.selected === false ? item.options[0] : false;
          else item.selected = !item.selected;
        }
      }
    }
    onChange(next);
  };

  const selectOption = (sectionKey, sideId, itemId, option) => {
    const next = deepClone(bakshanam);
    const section = next[sectionKey];
    if (sideId && section.sides) {
      const side = section.sides.find(s => s.id === sideId);
      const item = side.items.find(i => i.id === itemId);
      if (item) item.selected = option;
    } else {
      const item = section.items.find(i => i.id === itemId);
      if (item) item.selected = option;
    }
    onChange(next);
  };

  const updateSideQuantity = (sectionKey, sideId, qty) => {
    const next = deepClone(bakshanam);
    const side = next[sectionKey].sides.find(s => s.id === sideId);
    if (side) side.quantity = qty;
    onChange(next);
  };

  const updateItemQty = (sectionKey, itemId, qty) => {
    const next = deepClone(bakshanam);
    const item = next[sectionKey].items.find(i => i.id === itemId);
    if (item) item.qty = qty;
    onChange(next);
  };

  const addItem = (sectionKey, sideId) => {
    if (!newItem.trim()) return;
    const next = deepClone(bakshanam);
    const newEntry = { id: `custom_bk_${Date.now()}`, text: newItem.trim(), selected: true, custom: true };
    if (sideId && next[sectionKey].sides) {
      const side = next[sectionKey].sides.find(s => s.id === sideId);
      side.items.push(newEntry);
    } else {
      if (!next[sectionKey].items) next[sectionKey].items = [];
      newEntry.qty = "";
      next[sectionKey].items.push(newEntry);
    }
    onChange(next);
    setNewItem("");
    setAddingTo(null);
  };

  const renderAddButton = (key) => {
    const isAdding = addingTo === key;
    if (isAdding) {
      return (
        <div style={{ display: "flex", gap: "8px", marginTop: "10px", alignItems: "center" }}>
          <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addItem(key.split(":")[0], key.split(":")[1] || null)}
            placeholder="புதிய item..." autoFocus
            style={{ flex: 1, padding: "8px 12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "14px", fontFamily: "'Noto Sans Tamil', sans-serif", outline: "none" }} />
          <button onClick={() => addItem(key.split(":")[0], key.split(":")[1] || null)}
            style={{ padding: "8px 16px", background: "#b8860b", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "13px", fontWeight: "600" }}>சேர்</button>
          <button onClick={() => { setAddingTo(null); setNewItem(""); }}
            style={{ padding: "8px 12px", background: "#eee", color: "#666", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "13px" }}>✕</button>
        </div>
      );
    }
    return (
      <button onClick={() => setAddingTo(key)} style={{ marginTop: "8px", padding: "6px 14px", background: "none", border: "1px dashed #b8860b", borderRadius: "8px", color: "#b8860b", cursor: "pointer", fontSize: "13px", fontFamily: "'Noto Sans Tamil', sans-serif" }}>
        + சேர்க்க
      </button>
    );
  };

  const sectionStyle = {
    marginBottom: "16px", background: "white", borderRadius: "12px", overflow: "hidden",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f0e6d3",
  };
  const headerStyle = {
    background: "linear-gradient(135deg, #5b2c6f, #7d3c98)", padding: "10px 16px",
    color: "white", fontWeight: "700", fontSize: "14px", fontFamily: "'Noto Sans Tamil', sans-serif",
  };
  const sideHeaderStyle = {
    fontSize: "13px", fontWeight: "700", color: "#5b2c6f", marginBottom: "8px",
    padding: "6px 10px", background: "#f3e8ff", borderRadius: "6px",
    fontFamily: "'Noto Sans Tamil', sans-serif",
    display: "flex", justifyContent: "space-between", alignItems: "center",
  };

  const renderSideWithQuantity = (sectionKey, side) => (
    <div key={side.id} style={{ marginBottom: "16px" }}>
      <div style={sideHeaderStyle}>
        <span>{side.label}</span>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ fontSize: "11px", fontWeight: "500", color: "#7d3c98" }}>எண்ணிக்கை:</span>
          <input
            type="number"
            value={side.quantity || ""}
            onChange={(e) => updateSideQuantity(sectionKey, side.id, e.target.value)}
            placeholder="0"
            style={{
              width: "60px", padding: "4px 8px", borderRadius: "6px",
              border: "1px solid #d4b8e8", background: "white",
              fontSize: "14px", fontWeight: "700", textAlign: "center",
              outline: "none", color: "#5b2c6f",
            }}
          />
        </div>
      </div>
      {side.items.map((item) => (
        <BakshanamCheckItem key={item.id} item={item}
          onToggle={(id, rm) => toggleItem(sectionKey, side.id, id, rm)}
          onSelectOption={(id, opt) => selectOption(sectionKey, side.id, id, opt)} />
      ))}
      {renderAddButton(`${sectionKey}:${side.id}`)}
    </div>
  );

  return (
    <div>
      {/* சீர் பக்ஷணம் 5 in 1 */}
      <div style={sectionStyle}>
        <div style={headerStyle}>{bakshanam.seer.name}</div>
        <div style={{ padding: "12px 16px" }}>
          {bakshanam.seer.sides.map((side) => renderSideWithQuantity("seer", side))}
        </div>
      </div>

      {/* விநியோக பக்ஷணம் 2 in 1 */}
      <div style={sectionStyle}>
        <div style={headerStyle}>{bakshanam.viniyogam.name}</div>
        <div style={{ padding: "12px 16px" }}>
          {bakshanam.viniyogam.sides.map((side) => renderSideWithQuantity("viniyogam", side))}
        </div>
      </div>

      {/* பருப்பு தேங்காய் */}
      <div style={sectionStyle}>
        <div style={headerStyle}>{bakshanam.paruppuThengai.name}</div>
        <div style={{ padding: "12px 16px" }}>
          {bakshanam.paruppuThengai.items.map((item) => (
            <div key={item.id} style={{ padding: "8px 0", borderBottom: "1px solid #f5f0eb", opacity: item.selected === false ? 0.4 : 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button
                  onClick={() => toggleItem("paruppuThengai", null, item.id, false)}
                  style={{
                    width: "22px", height: "22px", minWidth: "22px", borderRadius: "4px",
                    border: item.selected !== false ? "2px solid #b8860b" : "2px solid #ccc",
                    background: item.selected !== false ? "#b8860b" : "white",
                    color: "white", fontSize: "14px", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", padding: 0,
                  }}
                >
                  {item.selected !== false && "✓"}
                </button>
                <span style={{ flex: 1, fontSize: "14px", color: "#333", fontFamily: "'Noto Sans Tamil', sans-serif" }}>
                  {item.text}
                </span>
                {item.custom && (
                  <button onClick={() => toggleItem("paruppuThengai", null, item.id, true)} style={{ background: "none", border: "none", color: "#e74c3c", cursor: "pointer", fontSize: "16px", padding: "0 4px" }}>✕</button>
                )}
                <input
                  type="text"
                  value={item.qty || ""}
                  onChange={(e) => updateItemQty("paruppuThengai", item.id, e.target.value)}
                  placeholder="எண்..."
                  style={{
                    width: "70px", padding: "4px 8px", borderRadius: "6px",
                    border: "1px solid #d4b8e8", fontSize: "13px",
                    textAlign: "center", outline: "none", color: "#5b2c6f",
                    fontWeight: "600",
                  }}
                />
              </div>
            </div>
          ))}
          {renderAddButton("paruppuThengai")}
        </div>
      </div>
    </div>
  );
}

export default function CateringMenuBuilder() {
  const [templateKey, setTemplateKey] = useState("3-day-brahmin");
  const [template, setTemplate] = useState(() => deepClone(MEAL_TEMPLATES["3-day-brahmin"]));
  const [customerName, setCustomerName] = useState("");
  const [mandapam, setMandapam] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [arrangements, setArrangements] = useState(() => deepClone(ARRANGEMENTS_TEMPLATES["3-day-brahmin"]));
  const [bakshanam, setBakshanam] = useState(() => deepClone(BAKSHANAM_TEMPLATE));
  const [activeDay, setActiveDay] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [expandedMeals, setExpandedMeals] = useState({});

  const handleToggleItem = useCallback((mealId, itemId) => {
    setTemplate((prev) => {
      const next = deepClone(prev);
      for (const day of next.days) {
        for (const meal of day.meals) {
          if (meal.id === mealId) {
            const item = meal.items.find((i) => i.id === itemId);
            if (item) {
              if (item.options) {
                item.selected = item.selected === false ? item.options[0] : false;
              } else {
                item.selected = !item.selected;
              }
            }
          }
        }
      }
      return next;
    });
  }, []);

  const handleSelectOption = useCallback((mealId, itemId, option) => {
    setTemplate((prev) => {
      const next = deepClone(prev);
      for (const day of next.days) {
        for (const meal of day.meals) {
          if (meal.id === mealId) {
            const item = meal.items.find((i) => i.id === itemId);
            if (item) item.selected = option;
          }
        }
      }
      return next;
    });
  }, []);

  const handleAddItem = useCallback((mealId, text) => {
    setTemplate((prev) => {
      const next = deepClone(prev);
      for (const day of next.days) {
        for (const meal of day.meals) {
          if (meal.id === mealId) {
            meal.items.push({
              id: `custom_${Date.now()}`,
              text,
              options: null,
              selected: true,
              custom: true,
            });
          }
        }
      }
      return next;
    });
  }, []);

  const handleRemoveCustom = useCallback((mealId, itemId) => {
    setTemplate((prev) => {
      const next = deepClone(prev);
      for (const day of next.days) {
        for (const meal of day.meals) {
          if (meal.id === mealId) {
            meal.items = meal.items.filter((i) => i.id !== itemId);
          }
        }
      }
      return next;
    });
  }, []);

  const handleGuestCountChange = useCallback((mealId, count) => {
    setTemplate((prev) => {
      const next = deepClone(prev);
      for (const day of next.days) {
        for (const meal of day.meals) {
          if (meal.id === mealId) {
            meal.guestCount = count;
          }
        }
      }
      return next;
    });
  }, []);

  const handleSwitchTemplate = (key) => {
    setTemplateKey(key);
    setTemplate(deepClone(MEAL_TEMPLATES[key]));
    setActiveDay(0);
    setBakshanam(deepClone(BAKSHANAM_TEMPLATE));
    setArrangements(deepClone(ARRANGEMENTS_TEMPLATES[key]));
  };

  const handleToggleArrangement = (sectionId, itemId) => {
    setArrangements((prev) => {
      const next = deepClone(prev);
      const item = next[sectionId].items.find((i) => i.id === itemId);
      if (item) item.checked = !item.checked;
      return next;
    });
  };

  const totalItems = template.days.reduce(
    (sum, day) =>
      sum +
      day.meals.reduce(
        (mSum, meal) => mSum + meal.items.filter((i) => i.selected !== false).length,
        0
      ),
    0
  );

  const previewContent = generatePDFContent(template, customerName, mandapam, customerPhone, startDate, endDate, arrangements, bakshanam, templateKey);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #fdf8f0 0%, #f5ebe0 100%)",
      fontFamily: "'Noto Sans Tamil', 'Segoe UI', sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #8b1a1a 0%, #c0392b 50%, #8b1a1a 100%)",
        padding: "20px 16px",
        color: "white",
        textAlign: "center",
        borderBottom: "4px solid #b8860b",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <h1 style={{
          fontSize: "20px",
          fontWeight: "800",
          margin: 0,
          fontFamily: "'Noto Sans Tamil', sans-serif",
          letterSpacing: "0.5px",
        }}>
          🪷 ஸ்ரீ சிவா விஷ்ணு கேட்டரிங் 🪷
        </h1>
        <p style={{ fontSize: "12px", opacity: 0.85, margin: "4px 0 0" }}>
          📞 9842408584 | 8248066570
        </p>
        <p style={{ fontSize: "11px", opacity: 0.7, margin: "2px 0 0" }}>
          Menu Builder • மெனு உருவாக்கி
        </p>
      </div>

      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "16px" }}>
        {/* Template Selector */}
        <div style={{
          display: "flex",
          gap: "8px",
          marginBottom: "16px",
        }}>
          {Object.entries(MEAL_TEMPLATES).map(([key, tmpl]) => (
            <button
              key={key}
              onClick={() => handleSwitchTemplate(key)}
              style={{
                flex: 1,
                padding: "12px 10px",
                borderRadius: "10px",
                border: templateKey === key ? "2px solid #b8860b" : "1px solid #ddd",
                background: templateKey === key ? "linear-gradient(135deg, #fff8e1, #ffe0b2)" : "white",
                color: templateKey === key ? "#7c5e10" : "#888",
                fontWeight: "700",
                fontSize: "13px",
                cursor: "pointer",
                fontFamily: "'Noto Sans Tamil', sans-serif",
                transition: "all 0.2s",
                textAlign: "center",
              }}
            >
              <div>{tmpl.name}</div>
              <div style={{ fontSize: "11px", fontWeight: "500", marginTop: "2px", opacity: 0.7 }}>{tmpl.nameEn}</div>
            </button>
          ))}
        </div>

        {/* Customer Info */}
        <div style={{
          background: "white",
          borderRadius: "12px",
          padding: "16px",
          marginBottom: "16px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          border: "1px solid #f0e6d3",
        }}>
          <h3 style={{ margin: "0 0 12px", fontSize: "15px", color: "#8b1a1a", fontWeight: "700" }}>
            நிகழ்வு விவரங்கள்
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div>
              <label style={{ fontSize: "12px", color: "#888", fontWeight: "600", display: "block", marginBottom: "4px" }}>
                வாடிக்கையாளர் பெயர்
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="பெயர் உள்ளிடவும்..."
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #e0d5c5",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontFamily: "'Noto Sans Tamil', sans-serif",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div>
              <label style={{ fontSize: "12px", color: "#888", fontWeight: "600", display: "block", marginBottom: "4px" }}>
                மண்டபம்
              </label>
              <input
                type="text"
                value={mandapam}
                onChange={(e) => setMandapam(e.target.value)}
                placeholder="மண்டபம் பெயர்..."
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #e0d5c5",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontFamily: "'Noto Sans Tamil', sans-serif",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div>
              <label style={{ fontSize: "12px", color: "#888", fontWeight: "600", display: "block", marginBottom: "4px" }}>
                தொலைபேசி எண்
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="கைபேசி எண்..."
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #e0d5c5",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontFamily: "'Noto Sans Tamil', sans-serif",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: "12px", color: "#888", fontWeight: "600", display: "block", marginBottom: "4px" }}>
                  தொடக்க தேதி (From)
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    border: "1px solid #e0d5c5",
                    borderRadius: "8px",
                    fontSize: "14px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: "12px", color: "#888", fontWeight: "600", display: "block", marginBottom: "4px" }}>
                  முடிவு தேதி (To)
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    border: "1px solid #e0d5c5",
                    borderRadius: "8px",
                    fontSize: "14px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Template Info */}
        <div style={{
          background: "linear-gradient(135deg, #fff8e1, #ffe0b2)",
          borderRadius: "12px",
          padding: "12px 16px",
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid #f0d68a",
        }}>
          <div>
            <span style={{ fontSize: "14px", fontWeight: "700", color: "#7c5e10" }}>
              {template.name}
            </span>
            <span style={{ fontSize: "12px", color: "#a08530", display: "block", marginTop: "2px" }}>
              {template.nameEn}
            </span>
          </div>
          <div style={{
            background: "#b8860b",
            color: "white",
            borderRadius: "20px",
            padding: "4px 12px",
            fontSize: "13px",
            fontWeight: "700",
          }}>
            {totalItems} items
          </div>
        </div>

        {/* Day Tabs */}
        <div style={{
          display: "flex",
          gap: "6px",
          marginBottom: "16px",
          overflowX: "auto",
          paddingBottom: "4px",
        }}>
          {template.days.map((day, idx) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(idx)}
              style={{
                padding: "10px 14px",
                borderRadius: "10px",
                border: activeDay === idx ? "2px solid #8b1a1a" : "1px solid #ddd",
                background: activeDay === idx ? "linear-gradient(135deg, #8b1a1a, #c0392b)" : "white",
                color: activeDay === idx ? "white" : "#666",
                fontWeight: "700",
                fontSize: "13px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                fontFamily: "'Noto Sans Tamil', sans-serif",
                transition: "all 0.2s",
                minWidth: "fit-content",
              }}
            >
              {day.label}
            </button>
          ))}
          {templateKey === "3-day-brahmin" && (
            <button
              onClick={() => setActiveDay("bakshanam")}
              style={{
                padding: "10px 14px",
                borderRadius: "10px",
                border: activeDay === "bakshanam" ? "2px solid #5b2c6f" : "1px solid #ddd",
                background: activeDay === "bakshanam" ? "linear-gradient(135deg, #5b2c6f, #7d3c98)" : "white",
                color: activeDay === "bakshanam" ? "white" : "#666",
                fontWeight: "700",
                fontSize: "13px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                fontFamily: "'Noto Sans Tamil', sans-serif",
                transition: "all 0.2s",
                minWidth: "fit-content",
              }}
            >
              பக்ஷணம்
            </button>
          )}
          <button
            onClick={() => setActiveDay("arrangements")}
            style={{
              padding: "10px 14px",
              borderRadius: "10px",
              border: activeDay === "arrangements" ? "2px solid #1a6b3c" : "1px solid #ddd",
              background: activeDay === "arrangements" ? "linear-gradient(135deg, #1a6b3c, #2d8a4e)" : "white",
              color: activeDay === "arrangements" ? "white" : "#666",
              fontWeight: "700",
              fontSize: "13px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              fontFamily: "'Noto Sans Tamil', sans-serif",
              transition: "all 0.2s",
              minWidth: "fit-content",
            }}
          >
            ஏற்பாடுகள்
          </button>
        </div>

        {/* Meals for Active Day, Bakshanam, or Arrangements */}
        {activeDay === "bakshanam" ? (
          <BakshanamSection bakshanam={bakshanam} onChange={setBakshanam} />
        ) : activeDay === "arrangements" ? (
          <div>
            {Object.entries(arrangements).map(([sectionKey, section]) => (
              <div key={sectionKey} style={{
                marginBottom: "16px",
                background: "white",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                border: "1px solid #f0e6d3",
              }}>
                <div style={{
                  background: sectionKey === "sivaVishnu"
                    ? "linear-gradient(135deg, #1a6b3c, #2d8a4e)"
                    : "linear-gradient(135deg, #4a6fa5, #6b8fc4)",
                  padding: "10px 16px",
                  color: "white",
                  fontWeight: "700",
                  fontSize: "14px",
                  fontFamily: "'Noto Sans Tamil', sans-serif",
                }}>
                  {section.name}
                  {section.subtitle && (
                    <div style={{ fontSize: "11px", fontWeight: "400", opacity: 0.8, marginTop: "2px" }}>
                      {section.subtitle}
                    </div>
                  )}
                </div>
                <div style={{ padding: "8px 16px" }}>
                  {section.items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleToggleArrangement(sectionKey, item.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "10px 0",
                        borderBottom: "1px solid #f5f0eb",
                        cursor: "pointer",
                      }}
                    >
                      <div style={{
                        width: "22px",
                        height: "22px",
                        minWidth: "22px",
                        borderRadius: "4px",
                        border: item.checked ? "2px solid #1a6b3c" : "2px solid #ccc",
                        background: item.checked ? "#1a6b3c" : "white",
                        color: "white",
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                        {item.checked && "✓"}
                      </div>
                      <span style={{
                        fontSize: "14px",
                        color: item.checked ? "#333" : "#888",
                        fontFamily: "'Noto Sans Tamil', sans-serif",
                        fontWeight: item.checked ? "600" : "400",
                        textDecoration: item.checked ? "line-through" : "none",
                      }}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          template.days[activeDay]?.meals.map((meal) => (
            <MealSection
              key={meal.id}
              meal={meal}
              onToggleItem={handleToggleItem}
              onSelectOption={handleSelectOption}
              onAddItem={handleAddItem}
              onRemoveCustom={handleRemoveCustom}
              onGuestCountChange={handleGuestCountChange}
            />
          ))
        )}

        {/* Arrangements section removed - now in tab */}

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
          <button
            onClick={() => setShowPreview(!showPreview)}
            style={{
              flex: 1,
              padding: "14px",
              borderRadius: "12px",
              border: "2px solid #8b1a1a",
              background: showPreview ? "#8b1a1a" : "white",
              color: showPreview ? "white" : "#8b1a1a",
              fontWeight: "700",
              fontSize: "15px",
              cursor: "pointer",
              fontFamily: "'Noto Sans Tamil', sans-serif",
              transition: "all 0.2s",
            }}
          >
            {showPreview ? "✕ மூடு" : "👁 Preview"}
          </button>
          <button
            onClick={() => {
              // Generate a print-friendly HTML and open print dialog (Save as PDF)
              const printWindow = window.open("", "_blank");
              if (!printWindow) return;
              
              let html = `<!DOCTYPE html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  @page { margin: 20mm 15mm; size: A4; }
  body { font-family: 'Noto Sans Tamil', sans-serif; color: #333; font-size: 13px; line-height: 1.6; }
  .header { text-align: center; border-bottom: 3px double #8b1a1a; padding-bottom: 12px; margin-bottom: 16px; }
  .header h1 { color: #8b1a1a; font-size: 22px; margin: 0; }
  .header h2 { font-size: 12px; color: #666; margin: 2px 0; font-weight: 400; }
  .header .phone { color: #8b1a1a; font-weight: 700; font-size: 14px; }
  .info { margin-bottom: 16px; }
  .info-row { display: flex; gap: 8px; margin: 4px 0; font-size: 14px; }
  .info-label { font-weight: 700; min-width: 100px; color: #8b1a1a; }
  .section-title { background: #8b1a1a; color: white; padding: 6px 12px; font-weight: 700; font-size: 14px; margin: 16px 0 8px; border-radius: 4px; }
  .meal-title { background: #f5ebe0; padding: 6px 12px; font-weight: 700; display: flex; justify-content: space-between; border-left: 3px solid #8b1a1a; margin: 10px 0 4px; }
  .meal-items { padding: 4px 12px 4px 20px; }
  .meal-item { padding: 2px 0; }
  .bakshanam-title { background: #5b2c6f; color: white; padding: 6px 12px; font-weight: 700; font-size: 14px; margin: 16px 0 8px; border-radius: 4px; }
  .side-label { background: #f3e8ff; padding: 4px 10px; font-weight: 700; color: #5b2c6f; margin: 8px 0 4px; font-size: 13px; }
  .arr-title { background: #1a6b3c; color: white; padding: 6px 12px; font-weight: 700; font-size: 14px; margin: 16px 0 8px; border-radius: 4px; }
  .arr-title.party { background: #4a6fa5; }
  .arr-item { padding: 3px 12px; font-size: 13px; }
  .arr-check { color: #1a6b3c; }
  .arr-uncheck { color: #ccc; }
  .footer { text-align: center; border-top: 2px solid #8b1a1a; padding-top: 10px; margin-top: 24px; font-size: 12px; color: #888; }
</style></head><body>`;

              // Header
              html += `<div class="header">
                <h1>ஸ்ரீ சிவா விஷ்ணு கேட்டரிங்</h1>
                <h2>HIGH CLASS CATERING & MARRIAGE SERVICES</h2>
                <div class="phone">📞 9842408584 | 8248066570</div>
              </div>`;

              // Info
              html += `<div class="info">`;
              if (customerName) html += `<div class="info-row"><span class="info-label">நபர்</span><span>${customerName}</span></div>`;
              if (mandapam) html += `<div class="info-row"><span class="info-label">மண்டபம்</span><span>${mandapam}</span></div>`;
              if (customerPhone) html += `<div class="info-row"><span class="info-label">தொலைபேசி</span><span>${customerPhone}</span></div>`;
              if (startDate) {
                const dateStr = endDate ? `${startDate} முதல் ${endDate} வரை` : startDate;
                html += `<div class="info-row"><span class="info-label">தேதி</span><span>${dateStr}</span></div>`;
              }
              const tLabel = templateKey === "3-day-brahmin" ? "3 நாள் பிராமண திருமணம்" : "1 நாள் திருமணம்";
              html += `<div class="info-row"><span class="info-label">வகை</span><span>${tLabel}</span></div>`;
              html += `</div>`;

              // Menu
              template.days.forEach((day) => {
                html += `<div class="section-title">${day.label}</div>`;
                day.meals.forEach((meal) => {
                  const gStr = meal.guestCount ? `நபர்: ${meal.guestCount}` : "";
                  html += `<div class="meal-title"><span>${meal.name} — ${meal.time}</span><span>${gStr}</span></div>`;
                  html += `<div class="meal-items">`;
                  meal.items.forEach((item) => {
                    if (item.selected === false) return;
                    const txt = item.options && typeof item.selected === "string" ? item.selected : item.text;
                    html += `<div class="meal-item">◆ ${txt}</div>`;
                  });
                  html += `</div>`;
                });
              });

              // Bakshanam (3-day only)
              if (templateKey === "3-day-brahmin") {
                html += `<div class="bakshanam-title">பக்ஷணம்</div>`;
                
                html += `<div style="padding:4px 12px;font-weight:700;font-size:14px;">${bakshanam.seer.name}</div>`;
                bakshanam.seer.sides.forEach((side) => {
                  const qStr = side.quantity ? ` — எண்ணிக்கை: ${side.quantity}` : "";
                  html += `<div class="side-label">${side.label}${qStr}</div>`;
                  side.items.forEach((item) => {
                    if (item.selected === false) return;
                    const txt = item.options && typeof item.selected === "string" ? item.selected : item.text;
                    html += `<div class="meal-item" style="padding-left:24px;">◆ ${txt}</div>`;
                  });
                });

                html += `<div style="padding:4px 12px;font-weight:700;font-size:14px;margin-top:8px;">${bakshanam.viniyogam.name}</div>`;
                bakshanam.viniyogam.sides.forEach((side) => {
                  const qStr = side.quantity ? ` — எண்ணிக்கை: ${side.quantity}` : "";
                  html += `<div class="side-label">${side.label}${qStr}</div>`;
                  side.items.forEach((item) => {
                    if (item.selected === false) return;
                    const txt = item.options && typeof item.selected === "string" ? item.selected : item.text;
                    html += `<div class="meal-item" style="padding-left:24px;">◆ ${txt}</div>`;
                  });
                });

                html += `<div style="padding:4px 12px;font-weight:700;font-size:14px;margin-top:8px;">${bakshanam.paruppuThengai.name}</div>`;
                bakshanam.paruppuThengai.items.forEach((item) => {
                  if (item.selected === false) return;
                  const txt = item.options && typeof item.selected === "string" ? item.selected : item.text;
                  const qStr = item.qty ? ` — ${item.qty}` : "";
                  html += `<div class="meal-item" style="padding-left:24px;">◆ ${txt}${qStr}</div>`;
                });
              }

              // Arrangements
              ["sivaVishnu", "party"].forEach(sectionKey => {
                const section = arrangements[sectionKey];
                const cssClass = sectionKey === "party" ? "arr-title party" : "arr-title";
                html += `<div class="${cssClass}">${section.name}</div>`;
                section.items.forEach((item) => {
                  const icon = item.checked ? `<span class="arr-check">✅</span>` : `<span class="arr-uncheck">⬜</span>`;
                  html += `<div class="arr-item">${icon} ${item.text}</div>`;
                });
              });

              // Footer
              html += `<div class="footer">
                ஸ்ரீ சிவா விஷ்ணு கேட்டரிங் காண்ட்ராக்ட்ஸ் | 📞 9842408584 | 8248066570
              </div>`;

              html += `</body></html>`;
              
              printWindow.document.write(html);
              printWindow.document.close();
              setTimeout(() => { printWindow.print(); }, 500);
            }}
            style={{
              flex: 1,
              padding: "14px",
              borderRadius: "12px",
              border: "none",
              background: "linear-gradient(135deg, #b8860b, #daa520)",
              color: "white",
              fontWeight: "700",
              fontSize: "15px",
              cursor: "pointer",
              fontFamily: "'Noto Sans Tamil', sans-serif",
              boxShadow: "0 2px 8px rgba(184,134,11,0.3)",
            }}
          >
            📄 PDF Download
          </button>
        </div>

        {/* Preview */}
        {showPreview && (
          <div style={{
            background: "white",
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "16px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            border: "2px solid #b8860b",
          }}>
            <h3 style={{ margin: "0 0 12px", fontSize: "15px", color: "#8b1a1a", fontWeight: "700" }}>
              மெனு Preview
            </h3>
            <pre style={{
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              fontFamily: "'Noto Sans Tamil', monospace",
              fontSize: "13px",
              lineHeight: 1.8,
              color: "#333",
              background: "#fdf8f0",
              padding: "16px",
              borderRadius: "8px",
              maxHeight: "500px",
              overflow: "auto",
              border: "1px solid #f0e6d3",
            }}>
              {previewContent}
            </pre>
          </div>
        )}

        {/* Reset */}
        <div style={{ textAlign: "center", paddingBottom: "40px" }}>
          <button
            onClick={() => {
              setTemplate(deepClone(MEAL_TEMPLATES[templateKey]));
              setCustomerName("");
              setMandapam("");
              setCustomerPhone("");
              setStartDate("");
              setEndDate("");
              setArrangements(deepClone(ARRANGEMENTS_TEMPLATES[templateKey]));
              setBakshanam(deepClone(BAKSHANAM_TEMPLATE));
              setShowPreview(false);
            }}
            style={{
              padding: "10px 24px",
              background: "none",
              border: "1px solid #ccc",
              borderRadius: "8px",
              color: "#999",
              fontSize: "13px",
              cursor: "pointer",
              fontFamily: "'Noto Sans Tamil', sans-serif",
            }}
          >
            🔄 Reset All
          </button>
        </div>
      </div>
    </div>
  );
}
