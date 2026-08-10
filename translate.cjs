const fs = require('fs');
const path = require('path');

const appTsxPath = path.join(__dirname, 'src', 'App.tsx');
let content = fs.readFileSync(appTsxPath, 'utf8');

const replacements = {
  "Save the Date": "සුබ මංගලම්",
  "OCTOBER 08, 2026": "2026 ඔක්තෝබර් 08",
  "ISANKA & MADUSANKA": "ඉසංකා සහ මදුසංක",
  "Isanka & Madusanka": "ඉසංකා සහ මදුසංක",
  ">I&M</p>": ">ඉ&ම</p>",
  ">\\n                I&M\\n              </motion.div>": ">\\n                ඉ&ම\\n              </motion.div>",
  "Tap Seal To Open": "විවෘත කිරීමට මුද්‍රාව ස්පර්ශ කරන්න",
  "Tap to Reveal": "විවෘත කිරීමට ස්පර්ශ කරන්න",
  "Open</p>": "විවෘත කරන්න</p>",
  ">Close</div>": ">වසන්න</div>",
  "Please join us": "කරුණාකර අප හා එක්වන්න",
  ">\\n                      Isanka\\n                    </motion.h1>": ">\\n                      ඉසංකා\\n                    </motion.h1>",
  "drop-shadow-md\">&</span>": "drop-shadow-md\">සහ</span>",
  ">\\n                      Madusanka\\n                    </motion.h1>": ">\\n                      මදුසංක\\n                    </motion.h1>",
  "08 OCTOBER 2026": "2026 ඔක්තෝබර් 08",
  "Hingurakgoda, Sri Lanka": "හිඟුරක්ගොඩ, ශ්‍රී ලංකාව",
  "Begin</span>": "ආරම්භය</span>",
  "You are cordially invited to<br className=\\\"hidden md:block\\\" /> celebrate the union of": "අපගේ විවාහ මංගල්‍යය සඳහා සහභාගී වන මෙන්<br className=\\\"hidden md:block\\\" /> කාරුණිකව ආරාධනා කරමු.",
  ">Isanka</h3>": ">ඉසංකා</h3>",
  ">Madusanka</h3>": ">මදුසංක</h3>",
  "The Date</p>": "දිනය</p>",
  "THURSDAY, 08 OCT": "බ්‍රහස්පතින්දා, ඔක්. 08",
  "The Time</p>": "වේලාව</p>",
  "09:00 AM</p>": "පෙරවරු 09:00</p>",
  "To 04:00 PM</p>": "පස්වරු 04:00 දක්වා</p>",
  "Wait for the <span": "සුබ මොහොත <span",
  "magic</span>": "එළඹෙන තුරු</span>",
  "Counting Down": "කාලය ගණනය කිරීම",
  "label: \"Days\"": "label: \"දින\"",
  "label: \"Hours\"": "label: \"පැය\"",
  "label: \"Minutes\"": "label: \"මිනිත්තු\"",
  "label: \"Seconds\"": "label: \"තත්පර\"",
  "The Venue</span>": "ස්ථානය</span>",
  "Sri Lanka.</p>": "ශ්‍රී ලංකාව.</p>",
  "We look forward to welcoming you to this beautiful sanctuary to celebrate our special day amidst nature's elegance.": "අපගේ ජීවිතයේ මෙම සුවිශේෂී දිනය සැමරීමට ඔබගේ පැමිණීම ඉතා ගෞරවයෙන් අපේක්ෂා කරමු.",
  "Get Directions": "මාර්ගය ලබාගන්න",
  "View on Map": "සිතියමෙන් බලන්න",
  "Will You Join Us?</p>": "ඔබ අප හා එක්වන්නේද?</p>",
  "RSVP</h2>": "පැමිණීම තහවුරු කිරීම</h2>",
  "We would be absolutely thrilled to celebrate with you. Kindly respond by the end of May.": "ඔබගේ පැමිණීම අපට මහත් සතුටකි. කරුණාකර ඔබගේ පැමිණීම තහවුරු කරන්න.",
  "Full Name</label>": "සම්පූර්ණ නම</label>",
  "John & Jane Doe": "සමන් සහ කමලා",
  "Guests</label>": "අමුත්තන් ගණන</label>",
  "1 Guest (Just Me)": "1 අමුත්තෙක් (මම පමණයි)",
  "2 Guests": "2 අමුත්තන්",
  "3 Guests": "3 අමුත්තන්",
  "4 Guests": "4 අමුත්තන්",
  "Regretfully Decline": "කනගාටුවෙන් වුවද පැමිණිය නොහැක",
  "Dietary Notes</label>": "ආහාරමය සටහන්</label>",
  "Allergies, Vegan, etc.": "ආසාත්මිකතා, නිර්මාංශික යනාදිය",
  "Send RSVP": "තහවුරු කිරීම යවන්න",
  "Sending...": "යවමින්...",
  "Sent Successfully": "සාර්ථකව යවන ලදි",
  "Best Wishes</h2>": "සුබ පැතුම්</h2>",
  "Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a message, we would be delighted to read it!": "ඔබගේ පැමිණීම අපට වටිනාම තෑග්ගයි. කෙසේ වෙතත්, ඔබගේ සුබ පැතුම් අපට මහත් සතුටක් ගෙන දෙනු ඇත!",
  "Your Name</label>": "ඔබගේ නම</label>",
  "John Doe": "සමන්",
  "Your Message</label>": "ඔබගේ පණිවිඩය</label>",
  "Wishing you a lifetime of happiness...": "ඔබට සදාකාලික සතුටක් ප්‍රාර්ථනා කරමි...",
  "Send Wishes": "සුබ පැතුම් යවන්න",
  "Thank You\\n                      </div>": "ස්තූතියි\\n                      </div>",
  "With Love</p>": "ආදරයෙන්</p>",
  "All rights reserved.": "සියලුම හිමිකම් ඇවිරිණි.",
  "Contact: <a": "ඇමතුම්: <a",
  "Isanka – 071 6613988": "ඉසංකා – 071 6613988"
};

for (const [key, value] of Object.entries(replacements)) {
  const regex = new RegExp(key.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'), 'g');
  content = content.replace(regex, value);
}

fs.writeFileSync(appTsxPath, content);
console.log("Translation complete!");
