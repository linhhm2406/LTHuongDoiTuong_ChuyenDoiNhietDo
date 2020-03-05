let Temperature = function (C_Degree) {
    this.C_Degree = C_Degree;

    this.getC_degree = function () {
        return this.C_Degree;
    };
    this.setC_degree = function (new_C_degree) {
        this.C_degree = new_C_degree;
    };
    this.changToF = function () {
        return (this.C_Degree * 1.8) + 32;
    };
    this.changeToKenvin = function () {
        return this.C_Degree + 237.15;
    };
};

let temperature = new Temperature(25);
alert(temperature.changToF());
alert(temperature.changeToKenvin());
