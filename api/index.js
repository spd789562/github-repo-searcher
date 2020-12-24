import { Octokit } from '@octokit/rest'

const octokit = new Octokit()

export const APIGetRepository = ({ query = 1, page = 1, per_page = 20 }) =>
  octokit.search.repos({
    q: encodeURIComponent(query),
    page,
    per_page,
  })

export const APIGetRateLimit = () => octokit.rateLimit.get()
