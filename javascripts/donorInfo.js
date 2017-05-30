console.log("donorInfo.js");

let donors = [{name: "Tony Huzzah",
email: "t-huzz@honey.com", donation: "2.50", donationType: "Per Lap"},
{name: "Gelato Jones", email: "ilovegelato@cream.com", donation: "30.00", donationType: "Single"}];

var donorInfo = ((orgdonorInfo) => {
	orgdonorInfo.addDonor = (infoObject) => {
		donors.push(infoObject);
	};
	orgdonorInfo.getDonors = () => {
		return donors;
	}
	return orgdonorInfo
})(donorInfo || {});