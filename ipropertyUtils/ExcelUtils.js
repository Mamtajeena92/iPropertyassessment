let XLSX = require('xlsx');

  class ExcelUtils{
		
	   /**
		* Get Data in json format from Excel file
		* @param {*} fileName 
		*/
	   getDataFromFileInJson(fileName,sheetName){
			var workbook = XLSX.readFile(fileName);
			var worksheet = workbook.Sheets[sheetName];
			var data = XLSX.utils.sheet_to_json(worksheet);
			return data
	   }
	
	   /**
		* Pass The file Name and adress of cell for which the data need to be read
		* @param {*} fileName 
		* @param {*} address 
		*/   
       getDataFromFileUsingAddress(fileName,address){
		// read the excel file
		var workbook = XLSX.readFile(fileName);
		//get the sheet default name
		var sheet_name = workbook.SheetNames[2];
		var worksheet = workbook.Sheets[sheet_name];
		var address_of_cell = address;
		/* Find desired cell */
        var cell_object = worksheet[address_of_cell];
        // get the value of the cell
        var cell_value = cell_object.v;
        return cell_value;
    };

    getAllDataFromFile(fileName){
		var workbook = XLSX.readFile(fileName);
        var sheet_name_list = workbook.SheetNames;
        /* iterate through sheets */
		sheet_name_list.forEach(function(y) { 
			var worksheet = workbook.Sheets[y];
			for (let z in worksheet) {
				/* all keys that do not begin with "!" correspond to cell addresses */
				if(z[0] === '!') continue;
				console.log(y + "!" + z + "=" + JSON.stringify(worksheet[z].v));
			}
		});
    }
};
module.exports = new ExcelUtils();

