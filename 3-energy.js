//Variables
V_energy;
eff_energy;
e_total;

//Proportional variables - must sum to 100
p_natgas;
p_coal;
p_hydro;
p_nuclear;
p_windsolar;
p_biomass;

//inherited from prior step
C_basin2030;

//constants
SWR_natgas = 0.74;
SWR_coal = 1.5;
SWR_hydro = 18.2;
SWR_nuclear = 2.15
SWR_windsolar = 0;
SWR_biomass = 1.19;
e_cap = 32543/1000;

//User has a drop down that will select a constant.
c_energy[] = 1, 0.9, 0.95; //None, Energy efficiency program A, Energy efficiency program B

//Logic for user

"What percentage of electricity in the Bow Basin is generated using:"

"natural gas combined cycle?"
p_natgas = USERSELECTION / 100;

"coal fired power plants?"
p_coal = USERSELECTION / 100;

"hydroelectric generators?"
p_hydro = USERSELECTION / 100;

"nuclear power plants?"
p_nuclear = USERSELECTION / 100;

"wind and solar?"
p_windsolar = USERSELECTION / 100;

"biomass?"
p_biomass = USERSELECTION / 100;

"Choose which energy efficiency program you would implement to reduce energy demand in the Basin."
eff_energy = c_energy[USERSELECTION];

//Logic for output

e_total = C_basin2030 * e_cap * eff_energy;
V_energy = eff_energy * ((SWR_natgas * p_natgas) + (SWR_coal * p_coal) + (SWR_hydro * p_hydro) + (SWR_nuclear * p_nuclear) + (SWR_windsolar * p_windsolar) + (SWR_biomass * p_biomass))
