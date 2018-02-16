//Variables
v_basin;
C_basin2030;

//constants and defined variables
//User will have a drop down that will select a constant.
YearType[] = 2851449, 3852364, 5197400; //Dry year, Average year, Wet year
PopulationGrowth[] = 1195747, 1589247, 2376247; // Slow growth, Medium growth, Significant growth

//User prompts

"Question 1 - select how much water is available to use–is it a dry, average, or wet year impacting the river’s flow?"
v_basin = YearType[USERSELECTION] * 1000;

"Question 2 - select how much the population in the Bow River Basin has changed from today - has there been little growth, some growth, or significant growth in the number of people living in the basin?"
C_basin2030 = PopulationGrowth[USERSELECTION];
