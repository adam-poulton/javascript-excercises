const fibonacci = function(fn) {
  return (fn < 0 ? "OOPS" :
      fn == 0 ? 0 :
      fn == 1 ? 1 :
      fibonacci(fn - 1) + fibonacci(fn - 2)
  )
}

module.exports = fibonacci
