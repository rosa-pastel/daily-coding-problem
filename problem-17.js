/*
Suppose we represent our file system by a string in the following manner:

The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

dir
    subdir1
    subdir2
        file.ext
The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext
The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.

We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).

Given a string representing the file system in the above format, return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0.

Note:

The name of a file contains at least a period and an extension.

The name of a directory or sub-directory will not contain a period.
*/
console.log(
  longestPathLength(
    "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
  )
); // 32
function longestPathLength(s) {
  let paths = allPaths(s);
  let longest = [];
  paths.map((path) => {
    path = path.map((file) => file.trim()).join("/");
    if (path.length > longest.length) longest = path;
  });
  return longest.length;
}
function allPaths(string) {
  if (string === "") return [];
  let allPaths = [];
  let path = [];
  string.split("\n").map((file) => {
    if (file.includes(".")) return allPaths.push([...path, file]);
    while (path.length > 0) {
      let fileLvl = dirLevel(file);
      let pathLvl = dirLevel(path[path.length - 1]);
      if (fileLvl > pathLvl) break;
      path.pop();
    }
    path.push(file);
  });
  return allPaths;
}
function dirLevel(dir) {
  return dir.split("\t").length - 1;
}
