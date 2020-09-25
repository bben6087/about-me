QUnit.module('MAIN MODULE', {});


QUnit.test('Testing calcVol', assert => {
  assert.equal(calcVol(1, 1, 1), 1, 'Positive ints test')
  assert.equal(calcVol(10, 10, 10), 1000, 'Positive ints test')
  assert.equal(calcVol(20, 20, 1), 400, 'Positive ints test')
  assert.equal(calcVol(-1, 2, 3), -6, 'Negative ints tests')
  assert.equal(calcVol(0,1,1), 0, 'Come out as zero if 0 is entered')
  assert.equal(calcVol(-1,1,-1), 1, 'Come out as positive if 2 negatives')
})

QUnit.config.autostart = false

window.addEventListener('load', () => {
  const appURL = '../volume-cal.html'
  const openingTag = '<main class="container mt-2">'
  const closingTag = '</main>';
  fetch(appURL, { method: 'GET' })
    .then(response => {
      return response.text();
    })
    .then(txt => {                
      const start = txt.indexOf(openingTag)
      const end = txt.indexOf(closingTag) + closingTag.length;
      const html = txt.substring(start, end)
      const qunitFixtureBody = document.querySelector('#qunit-fixture')
      qunitFixtureBody.innerHTML = html
      console.info(qunitFixtureBody) 
      QUnit.start();
    })
    .catch(error => {
      console.error('error:', error)
      QUnit.start();
    })
})


QUnit.test("Testing number validations", assert => {
  const input = document.querySelector('#width')
  const warning = document.querySelector('#warning1')
  input.value = -23
  assert.equal(input.value, -23, "A Bad value was assigned")
  assert.strictEqual(input.checkValidity(), false, "Fails validation like it should");
  input.focus()
  input.blur()
  assert.strictEqual(warning.innerHTML, 'Incorrect input! Please insert a positive integer from (1-10000)'
    , `Adds the warning message ${warning}`)
})