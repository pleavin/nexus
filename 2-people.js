//variables
V_people;
V_percap;
V_dish;
V_clean;
V_garden;
V_toilet;
dish_method;
dish_type;
V_load;
f_dish;
V_dish;
shower_method
shower_length
f_shower
f_bath
t_shower
V_shower
V_bath
V_clean
irr_method
f_irr
V_irr
dwell_type
A_lawn
toilet_method
C_toilet
V_toilet

//inherited from prior step
C_basin2030;

//constants
C_eco = 12;
C_noneco = 26;
C_hand = 102;
C_lowflow = 5.68;
C_avgflow = 9.46;
C_bath = 151;
C_drip = 0.14;
C_nondrip = 13.3;
f_flush = 5;
V_other = 163.45;

//User will have a drop down that will select a constant.
LUT_dishwasher[] = "handwash", "dishwasher"; //handwash, dishwasher
LUT_irri[] = "drip", "non-drip"; //Drip, non-drip
LUT_houseType = 0, 1, 2, 4, 8; //Apartment, Townhouse, Single Family, Large Home, Acreage


//User Prompts and related logic

//Q1
"How do you most often wash your dishes at home?"
dish_method = LUT_dishwasher[USERSELECTION];

//Q2
"Do you have an eco star dishwasher?"
dish_type = USERSELECTION; //Yes or no

//Q3
"How many times do you do a load of dishes in one day?"
V_load = USERSELECTION; //A number from 1 to 4.

//Q4
"Do you have a low flow showerhead?"
shower_method = USERSELECTION; //yes or no

//Q5
"How many minutes long is your typical shower?"
shower_length = USERSELECTION; //A number from 1 to 100.

//Q6
"How many showers do you take in a typical week?"
f_shower = USERSELECTION; //A number from 1 to 14.

//Q7
"How many baths do you take in a typical week?"
f_bath = USERSELECTION; //A number from 1 to 7.

//Q8
"What kind of irrigation system do you use to irrigate your lawn or garden?"
irr_method = LUT_irri[USERSELECTION];

//Q9
"How many times do you water your lawn in a typical week, assuming that no rain has fallen?"
f_irr = USERSELECTION; //A number from 0 to 14.

//Q10
"How big is your lawn?"
dwell_type = LUT_houseType[USERSELECTION];

//Q11
"Do you have a water efficient toilet, i.e. low flow or dual flush?"
toilet_method = USERSELECTION; //yes or no.


//Output logic

//Q's 1 - 3
if (dish_method == "handwash")
{
  V_load = C_hand;
}
else
{
  if (dish_type == "yes") {
    V_load = C_eco;
  }
  else
  {
    V_load = C_noneco;
  }
}

V_dish = f_dish * V_load;

//Qs 4 - 7
t_shower = f_shower * shower_length;

if (shower_method == "yes")
{
  V_shower = C_lowflow * t_shower;
}
else {
  V_shower = C_avgflow * t_shower;
}

V_bath = C_bath * f_bath;

V_clean = (V_bath + V_shower) / 7;

//Qs 8 - 10

if (irr_method == "Non-drip")
{
    V_irr = C_nondrip * 20 * f_irr * 16 / 365 * dwell_type;
}
else {
    V_irr = C_drip * 20 * f_irr * 16 / 365 * dwell_type;
}

//Q 11

if (toilet_method == "yes") {
  C_toilet = 0.5
}
else {
  C_toilet = 2;
}

V_toilet = C_toilet * f_flush;

//All activities

V_percap = (V_dish + V_clean + V_garden + V_toilet + V_other);

V_people = C_basin2030 * V_percap * 365 * 0.001;
