import { Octokit } from '@octokit/rest'

const octokit = new Octokit()

const sleep = (seconds) => (...args) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(...args)
    }, seconds)
  })

export const APIGetRepository = ({
  query = '',
  page = 1,
  per_page = 20,
} = {}) =>
  query
    ? octokit.search
        .repos({
          q: encodeURIComponent(query),
          page,
          per_page,
        })
        .then(sleep(500))
    : new Promise((resolve) => resolve)

export const APIGetRateLimit = () => octokit.rateLimit.get()
