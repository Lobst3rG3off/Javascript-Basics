function solution(str) {
  String.prototype.reverse_string = function() {
    return this.split('')
      .reverse()
      .join('');
  };
}

solution('world');
