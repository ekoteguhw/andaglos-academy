const shoppingTime = function(memberId = '', money = 0) {

	const SALE = [
		{
			brand: 'Casing Handphone',
			price: 50000
		},
		{
			brand: 'Baju Zoro',
			price: 500000
		},
		{
			brand: 'Sweater Uniklooh',
			price: 175000
		},
		{
			brand: 'Baju H&N',
			price: 250000
		},
		{
			brand: 'Sepatu Stacattu',
			price: 1500000
		}
	];

	const sortedSALE = SALE.sort(function(sale1, sale2) {
		return sale1.price < sale2.price;
	})

	if (memberId == '') {
		return 'Mohon maaf, toko X hanya berlaku untuk member saja';
	} else {
		if (money < 50000) {
			return 'Mohon maaf, uang tidak cukup';
		} else {
			const listPurchased = [];
			let changeMoney = money;
			let index = 0;
			
			while (index < sortedSALE.length && changeMoney >= 0) {
				if (changeMoney >= sortedSALE[index].price) {
					changeMoney -= sortedSALE[index].price;
					listPurchased.push(sortedSALE[index].brand);
				}
				index++;
			}

			const shopping = {};
			shopping.memberId = memberId;
			shopping.money = money;
			shopping.listPurchased = listPurchased;
			shopping.changeMoney = changeMoney;

			return shopping;
		}
	}
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja