import "./styles.css";
import $ from "jquery";

document.getElementById("app").innerHTML = `
<h1>Hello Check!</h1>

<br/>
      <label>
        Checkbox 1
        <input type="checkbox" id="id1" name="id1" />
      </label>
      <label>
        Checkbox 2
        <input type="checkbox" id="id2" name="id2" />
      </label>
      <label>
        Checkbox 3
        <input type="checkbox" id="id3" name="id3" />
      </label>
      <label>
        Checkbox 4
        <input type="checkbox" id="id4" name="id4" />
      </label>

      <div id="result"></div>
      <div id="sideeffect"></div>
`;
var arrChecked = [];
var checkboxes = $("input[type=checkbox]");

function checkEm(element, index) {
  arrChecked[index] = element.checked ? element.id : null;
  $("#result").html(JSON.stringify(arrChecked));
}

function checkCallback() {
  const valids = arrChecked.filter(item => item !== null);
  if (!valids.length) {
    $("#sideeffect").html("Side effect none checked");
  }
  if (valids.length === 1) {
    $("#sideeffect").html("Side effect one valid");
  }
  if (valids.length === 2) {
    $("#sideeffect").html("Side effect two valid");
  }
  if (valids.length === 3) {
    $("#sideeffect").html("Side effect three valid");
  }
  if (valids.length === 4) {
    $("#sideeffect").html("Side effect four valid");
  }
}

checkboxes.each((i, item) => {
  $(item).on("click", function() {
    checkEm(item, i);
    checkCallback();
  });
});
