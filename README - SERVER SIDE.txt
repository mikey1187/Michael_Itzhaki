the server is connected to MySQL Workbench Database 
the data base has 6 tables - each for every expertise, when the user is choosing the desired
expertise he is redirecting to the page with the form selection for his best dr.
the form is getting the user needs and in the following page its shows the list of the best doctors.
in my project, the site will show only doctors with expertise in knee injures, because the work for gathering data
is complicated and the main purpose is to show the server building knowledge. furthermore, I know that my dB schema
is not the beדt and could be much smarter to use foreign keys and more tools to make it even better, but due to
main line of the project - server side,I didn’t go to the smallest detail.

in the db the tables are orginaized as main doctors table and each expertise, as i said - only knee will be loaded with data. 
i load the tables using the WorkBench Import wizard and a csv files genreator (under "sqlScripts" folder). 
due to the need in adding manauley the reviews for using the "best rating" sort button the button wont actualy work but the js code will be 
writen like the tabels are full.

after rediercting to the experts page the form gets the selected parmeters from the user and query it in the right table
the code is in comment mode because its wont run correctly.

in the doctors page there are tow buttons for sorting that by cliking them the page refreshed with more specifed sql query to get only the best results.

