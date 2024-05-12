const data =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc";

function calculateSize(count) {
  const width = Math.sqrt(count) * 10;
  const height = width;
  return [width, height];
}

function arrayToHashMap(arr) {
  const map = {};
  arr.forEach((item) => {
    let cleaned = item.toLowerCase().replace(/[^a-z0-9]/gi, "");
    if (cleaned.length > 0) {
      if (map[cleaned]) {
        map[cleaned] += 1;
      } else {
        map[cleaned] = 1;
      }
    }
  });
  return map;
}

function processParagraph(paragraph) {
  const words = paragraph.split(" ");
  const hashedData = arrayToHashMap(words);

  const result = [];

  Object.entries(hashedData).forEach((data) => {
    const size = calculateSize(data[1]);
    result.push([data[0], data[1], size]);
  });

  return result;
}

const temp = " a b c a d e ";
console.log(processParagraph(temp));
