// Before ~ Remove Control Flag
function foundUser (users, name) {
  let found = false
  for (let i = 0; i < users.length; i++) {
    if (users[i]  === name) {
      found = true
    }
  }
  
  if (found) {
    return true
  } else {
    return false
  }
}

// After ~ Remove Control Flag
function foundUser (users, name) {
  const length = users.length
  
  for (let i = 0; i < length; i++) {
    if (users[i] === name) {
      return true
    }
  }

  return false
}

const users = ['Maria', 'Jhon', 'Sebastián', 'Jhon']

foundUser(users, 'Jhon')
  