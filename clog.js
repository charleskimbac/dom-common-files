/* v2025.5.3 from https://github.com/charleskimbac/dom-common-files
  console.log alternative so we can easily filter in console with "[<TAG_NAME>]".

  purpose: string
  values: any[]

  prints:
  [<TAGNAME>] <purpose>
  [<TAGNAME>] <purpose> - <...values>
*/

const TAG_NAME = "TAGNAME";

function clog(purpose, ...values) {
  if (values.length === 0) {
    console.log(`[${TAG_NAME}]`, purpose); // prints: [<TAGNAME>] purpose
  } else {
    console.log(`[${TAG_NAME}]`, purpose, "-", ...values); // prints: [<TAGNAME>] <purpose> - <...values>
  }
}