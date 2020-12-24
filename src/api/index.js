import { Octokit } from '@octokit/rest'

const octokit = new Octokit()

export const APIGetRepository = ({
  query = '',
  page = 1,
  per_page = 20,
} = {}) =>
  query
    ? octokit.search.repos({
        q: encodeURIComponent(query),
        page,
        per_page,
      })
    : new Promise((resolve) => resolve)

export const APIGetRateLimit = () => octokit.rateLimit.get()
