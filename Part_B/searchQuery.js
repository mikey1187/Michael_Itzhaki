// // const doctors = async (healthcare, sub_expertise, region, hospital) => {
// //   try {
// //     // Connect to the database
// //     const db = await require("./db.js");

// //     // Build the query
// //     let query = 'SELECT * FROM knee_Experts WHERE 1=1';
// //     if (healthcare) {
// //       query += ` AND healthcare = '${healthcare}'`;
// //     }
// //     if (sub_expertise) {
// //       query += ` AND sub_expertise = '${sub_expertise}'`;
// //     }
// //     if (region) {
// //       query += ` AND region = '${region}'`;
// //     }
// //     if (hospital) {
// //       query += ` AND hospital = '${hospital}'`;
// //     }

// //     // Execute the query and get the results
// //     const result = await db.query(query);

// //     return result;
// //   } catch (error) {
// //     console.error(error);
// //     return error;
// //   }
// // };

// // // Call the function and pass in the selected options
// // const selectedHealthcare = document.getElementById('helathCare1').value;
// // const selectedSubExpertise = document.getElementById('subExpertise1').value;
// // const selectedRegion = document.getElementById('region1').value;
// // const selectedHospital = document.getElementById('hospital1').value;

// // doctors(selectedHealthcare, selectedSubExpertise, selectedRegion, selectedHospital)
// //   .then((result) => {
// //     console.log(result);
// //   })
// //   .catch((error) => {
// //     console.error(error);
// //   });

// // module.exports = {doctors};
