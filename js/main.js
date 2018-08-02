console.log(personalInfo.personalInfo[0].firstName);


var fullName = personalInfo.personalInfo[0].firstName + ' ' + personalInfo.personalInfo[0].lastName;

$('.profile-usertitle-name').text(fullName);
$('.profile-usertitle-job').text(personalInfo.personalInfo[0].uniqueID);