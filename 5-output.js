//Variables
V_extra;
V_basintotal;

//inherited from prior steps
V_people;
V_food;
V_energy;
V_basin;

//May need to inherit more variables - however the output will be strings of text based on the selections made.

//User input
//There's no user input in this page.

//Output Logic
V_basintotal = V_people + V_food + V_energy;
V_extra = V_basin - Vbasintotal;
