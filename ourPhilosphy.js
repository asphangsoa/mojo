/*global this*/
(function () {
  philosophySection = function () {
    this.values = [
      {
        "Convenient": {
          "Title": "Convenient",
          "Text": "Getting your coffee should fit seamlessly into your busy morning. Like grabbing it through the McDonalds drive through, without any waiting and delay.",
          "Img": "<CALL FILE IMAGE HERE>"
        }
      },
      {
        "Personalized": {
          "Title": "Personalized",
          "Text": "How you like your coffee, when you want your coffee, and how your coffee charges you up for the day should be tailored to your taste and what your body needs after your night's sleep.",
          "Img": "<CALL FILE IMAGE HERE>"
        }
      },
      {
        "BeautifullyDesigned": {
          "Title": "#Aesthetic",
          "Text": "Beautifully designed, easy-to-use, and artisticalyl integrated into your living space. Whether it be in your bedroom or kitchen, Mojo ahs been designed from the inside out to fit into your daily lifestyle.",
          "Img": "<CALL FILE IMAGE HERE>"
        }
      }
    ];
  };

  philosophySection.prototype.init = function () {
    var philosophySection;
    if (true/*value in navigation bar exists*/) {
      philosophySection = document.createElement("div");
      philosophySection.className = "philosophySection";
      philosophySection.innerHTML = this.insertPhilosophyTitle() + this.assemblePhilosophyValuesSection();

    }
  }

  philosophySection.prototype.insertPhilosophyTite = function () {
    var _title = document.createElement("h2");
    _title.innerHTML = "Our Philosophy";

    return _title;
  };

  philosophySection.prototype.assemblePhilosophyValuesSection = function () {
    var i;
    var _buildHTML = "";
    var _template = "<div class=\"valueContainer\""> +
          "<img class=\"valueIcon\" src=%img%>" +
          "<h3 class=\"valueTitle\">%Title%</h3>" +
          "<p class=\"valueSummary\">%Summary%</p>" +
        "</div>";
    for (i = 0; i < this.values.length; i = i + 1) {
      _buildHTML = _buildHTML + _template.replace(/%img%/gi, this.values[i].Img)
        .replace(/%Title%/gi, this.values[i].Img)
        .replace(/%Summary%/gi, this.values[i].Text);

      return _buildHTML;
    }
  };

  philosophySection.init();
}());
