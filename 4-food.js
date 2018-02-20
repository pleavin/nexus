//Variables

V_food;
V_crop;
v_net;

area_alfalfa;
p_alfalfa;
v_alfalfa;

area_barley;
p_barley;
v_barley;

area_pea;
p_pea;
v_pea;

area_potato;
p_potato;
v_potato;

area_canola;
p_canola;
v_canola;

V_livestock;
p_livestock;
eff;
precip;

//Inherited Variables
YearType[]; //note - just need to know if the user picked dry, average, or wet).

//constants
cwr_alfalfa = 506;
cwr_barley = 380;
cwr_pea = 300;
cwr_potato = 475;
cwr_canola = 400;
wr_livestock = 15.70;
n_livestock = 1477123;
Tot_Irrigated = 324000;
Tot_Livestock = 1477123;
LUT_livestock[] = 0.5, 0.66, 1, 1.33, 1.5 //Way less (half as many), Less (about a third as many), The same, More (increase by a third), Way more (double).
LUT_eff[] = 90, 70, 80, 60; //Program 1, Program 2, Program 3, Baseline efficiency

//User has a drop down that will select a constant.

"What percentage of agricultural land is dedicated to growing:"

"alfalfa?"
p_alfalfa = USERSELECTION / 100;

"barley?"
p_barley = USERSELECTION / 100;

"peas?"
p_pea = USERSELECTION / 100;

"potatos?"
p_potato = USERSELECTION / 100;

"canola?"
p_canola = USERSELECTION / 100;

"Are more livestock needed to satisfy people's demand for food? Or less? Does the demand stay the same as needs are met with alternative food sources?"
p_livestock = LUT_livestock[USERSELECTION]; //Way less (half as many), Less (about a third as many), The same, More (increase by a third), Way more (double).

"Which irrigation efficiency program (if any) would you implement?"
eff = LUT_eff[USERSELECTION]; //Program 1, Program 2, Program 3, Baseline

//output Logic

area_alfalfa = p_alfalfa * Tot_Irrigated;
v_alfalfa = cwr_alfalfa/1000 * area_alfalfa * 4046;

area_barley = p_barley * Tot_Irrigated;
v_barley = cwr_barley/1000 * area_barley * 4046;

area_pea = p_pea * Tot_Irrigated;
v_pea = cwr_pea/1000 * area_pea * 4046;

area_potato = p_potato * Tot_Irrigated;
v_potato = cwr_potato/1000 * area_potato * 4046;

area_canola = p_canola * Tot_Irrigated;
v_canola = cwr_canola/1000 * area_canola * 4046;

v_net = v_alfalfa + v_barley + v_pea + v_potato + v_canola;

v_crop = v_net * (1 + (1 - (eff/100)));

V_livestock = wr_livestock * n_livestock * p_livestock;

switch (YearType){
  case 2851449: //low precip
    precip = 0.66;
  case 3852364: //avg precip
    precip = 1;
  case 5197400: //high precip
    precip = 1.33;
}

V_food = ((V_crop + V_livestock)/precip )*1.34;
