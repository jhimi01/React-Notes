const useCreateDate = () => {
    let dateObj = new Date();
    const month = dateObj.getMonth();
    let motnName;
    switch (month) {
      case 0:
        motnName = "Jan";
        break;
      case 1:
        motnName = "Feb";
        break;
      case 2:
        motnName = "March";
        break;
      case 3:
        motnName = "Apr";
        break;
      case 4:
        motnName = "May";
        break;
      case 5:
        motnName = "Jun";
        break;
      case 6:
        motnName = "Jul";
        break;
      case 7:
        motnName = "Aug";
        break;
      case 8:
        motnName = "Sep";
        break;
      case 9:
        motnName = "Oct";
        break;
      case 10:
        motnName = "Nov";
        break;
      case 11:
        motnName = "Dec";
        break;
    }
    const date  = `${motnName} ${dateObj.getDate()} ${dateObj.getFullYear()} [${dateObj.getHours()}:${dateObj.getMinutes()}]`;
    return date;
  };

  export default useCreateDate;