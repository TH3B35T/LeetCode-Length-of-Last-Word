/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    trimmed_str_arr = s.trim().split(" ") // removing white spaces from first and last position
    return trimmed_str_arr.pop().length
};
