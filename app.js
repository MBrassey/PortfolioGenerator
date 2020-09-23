const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = (profileDataArr) => {
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }

    console.log("================");

    profileDataArr.forEach(function (profileItem) {
        console.log(profileItem);
    });
};

printProfileData(profileDataArgs);
