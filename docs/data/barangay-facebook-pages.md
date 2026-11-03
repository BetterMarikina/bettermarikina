# Barangay Facebook pages: checklist for FOI-1

Found by web search on 2026-11-02. Our tools can't open Facebook (Firecrawl refuses the site), so these are **candidates**: open each one while logged in and confirm it before anything goes into `barangays.json`.

**Confidence** is from the page title and description only. High = the page calls itself the barangay's official page. Low = could be a community, place or personal page.

| Barangay | Candidate page | Confidence | Note |
|---|---|---|---|
| Barangka | https://www.facebook.com/Brgy.Barangka.Marikina/ | Medium | Also a profile calling itself "Official Facebook Account of Brgy. Barangka": https://www.facebook.com/barangkabarangay.council.58/ |
| Kalumpang | https://www.facebook.com/barangaykalumpangofficial | Medium | Named by the "Barangay Kalumpang Community" page as the barangay government's page; not opened directly |
| Industrial Valley Complex | https://www.facebook.com/BrgyIVC/ | Medium | Lists the barangay hall address on Maj. Dizon St. |
| Jesus dela Peña | https://m.facebook.com/pages/Brgy-Jesus-Dela-Pe%C3%B1a-Marikina-City/718732924869393 | Low | Looks like an auto-made place page; search for another |
| Malanday | https://www.facebook.com/BarangayMalandayMarikinaCity/ | Medium | Describes itself as the barangay's official site |
| San Roque | https://www.facebook.com/BarangaySanRoqueMarikinaCity/ | High | "Official Facebook page of Sangguniang Barangay ng San Roque"; has a council post listing kagawads |
| Santa Elena | https://www.facebook.com/BrgyStaElenaMarikinaOfficial/ | High | "Official" in the page name |
| Santo Niño | https://www.facebook.com/brgysantonino/ | Medium | Page snippet lists kagawad names |
| Tañong | https://www.facebook.com/p/Barangay-Ta%C3%B1ong-Council-61553549227340/ | Medium | "Barangay Tañong Council", government organization |
| Concepcion Uno | https://www.facebook.com/p/Barangay-Concepcion-Uno-100090453683080/ | Medium | "Announcements, events & updates of the barangay" |
| Concepcion Dos | https://www.facebook.com/barangaycondosmarikina/ | High | "OFFICIAL FACEBOOK PAGE" |
| Fortune | https://www.facebook.com/barangayfortune/ | Medium | Government building page at the barangay hall (Champaca 1 St.) |
| Marikina Heights | https://www.facebook.com/p/Barangay-Marikina-Heights-Official-PART-2-100095558884974/ | High | "The official Page of Barangay Marikina Heights" |
| Nangka | https://www.facebook.com/barangay.celso.delas.armas/ | Medium | Says it is the official page, but the handle is the Punong Barangay's name; check it is the barangay's and not a personal page |
| Parang | https://www.facebook.com/p/Brgy-PARANG-Marikina-City-100094087754535/ | Low | Reads like a community page; search for another |
| Tumana | https://www.facebook.com/pages/Brgytumana-Marikina-City/195177153994915 | Low | Looks like a place page; search for another |

## What to check on each page

1. **Is it official?** Signs: run by the barangay (posts signed by the Sangguniang Barangay), linked from the city PIO page, or a government-organization label. Skip fan pages, groups and personal profiles.
2. **Find the council post.** Usually the oath-taking post after the October 2023 BSKE, or a "Barangay Council" photo. Copy:
   - Punong Barangay
   - the 7 kagawads
   - the SK Chairperson
   - the post's link and date
3. **Note any changes since 2023**: a resignation, death, suspension or new appointment.
4. **Do not copy** personal mobile numbers or personal emails, even if the page posts them. Office landlines and office emails are fine.

## Results of the 2026-11-03 check

Read while logged in, using each page's own search for "kagawad" and "oath taking" (no Facebook-wide search). Read only: nothing liked, commented or messaged.

| Barangay | Result | What was found |
|---|---|---|
| San Roque | **Published** | Full council and SK Chairperson in the post of 2023-12-12. In `barangays.json`. |
| Santa Elena | **Published** | Oath-taking post of 2023-11-09: Punong Barangay and 7 kagawads, some by nickname. SK Chairperson not named. In `barangays.json`. |
| Fortune | Partial | Official page, 2026 posts name 5 kagawads across separate posts (Cesar P. Bordas, Elpidio V. Felipe, Raul R. Apostol, Jess L. Llantada, Luis "Weng" Buenaventura). No single council post. Not published. |
| Nangka | Partial | The page is titled "Barangay Nangka" (profile 61569340538226). Posts name 5 kagawads (Randy G. Leal, Eric Delos Reyes, Judy Magtubo, Jaime G. Cruz Jr., Patrick Gene B. Urrutia). No single council post. Not published. |
| Concepcion Uno | Not found | Official page; only passing mentions (Kagawad Rodolfo Francisco). |
| Tañong | Not found | Official page; only passing mentions (Kagawad Rhom Berdin, Kagawad Leonides A. Loresco). |
| Concepcion Dos | Not found | Official page (profile 61556051116171); only birthday posts for single kagawads. |
| Kalumpang | Not found | Official page, but the kagawad posts are from 2019 (previous council). |
| Industrial Valley Complex | Not found | Posts are from 2020. |
| Santo Niño | Not found | Only HOA and BPAT oath-takings, and 2020 posts. |
| Marikina Heights | Not found | The "Official PART 2" link is a Facebook group (member welcome posts), not the barangay's page. |
| Barangka | Not found | Community page that reshares other posts; not the barangay's own. |
| Malanday | Not found | Page shows "This content isn't available right now". |
| Parang | Not found | Community page (candidate posts, 2013 reposts). |
| Jesus dela Peña | Not found | Place page, no posts. |
| Tumana | Not found | Place page, no posts. |

Fourteen barangays stay on FOI-1. The partial lists for Fortune and Nangka can be used to check the FOI-1 answer when it arrives.

## After checking

Send the confirmed page links and council posts back, and they go into `barangays.json` (`facebook`, `officials`) as Tier 1 announcement sources, with the post date as the as-of date. Barangays with no official page or council post stay on FOI-1.
