/*
Problem:
Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.
*/

console.log(
  findRoomsRequired([
    [30, 75],
    [0, 50],
    [60, 150],
  ])
); // 2

function findRoomsRequired(lectures) {
  let overlappingGroups = [];
  lectures.forEach((lecture) => {
    let groupAssigned = 0;
    overlappingGroups.forEach((overlappingGroup) => {
      let overlapsAll = 1;
      overlappingGroup.forEach((otherLecture) => {
        if (!checkOverlapping(otherLecture, lecture)) {
          overlapsAll = 0;
        }
      });
      if (overlapsAll) {
        overlappingGroup.push(lecture);
        groupAssigned = 1;
      }
    });
    if (!groupAssigned) overlappingGroups.push([lecture]);
  });
  let maxOverlap = 0;
  overlappingGroups.forEach((overlappingGroup) => {
    maxOverlap = Math.max(overlappingGroup.length, maxOverlap);
  });
  return maxOverlap;
}

function checkOverlapping(otherLecture, lecture) {
  let lectureStart = lecture[0];
  let lectureEnd = lecture[1];
  let otherLectureStart = otherLecture[0];
  let otherLectureEnd = otherLecture[1];
  if (
    (lectureStart < otherLectureEnd && lectureStart > otherLectureStart) ||
    (lectureEnd < otherLectureEnd && lectureEnd > otherLectureStart)
  )
    return 1;
  return 0;
}
