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

## After checking

Send the confirmed page links and council posts back, and they go into `barangays.json` (`facebook`, `officials`) as Tier 1 announcement sources, with the post date as the as-of date. Barangays with no official page or council post stay on FOI-1.
