export function host (url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const parts = host.split('.').slice(-3)
  if (parts[0] === 'www') parts.shift()
  return parts.join('.')
}

export function timeAgo (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), '分')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), '时')
  } else {
    return pluralize(~~(between / 86400), '天')
  }
}

function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + '~'
}
