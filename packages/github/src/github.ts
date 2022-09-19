import * as Context from './context'
import {GitHub, getOctokitOptions} from './utils'

// octokit + plugins
import {OctokitOptions, OctokitPlugin } from '@octokit/core/dist-types/types'

export const context = new Context.Context()

/**
 * Returns a hydrated octokit ready to use for GitHub Actions
 *
 * @param     token    the repo PAT or GITHUB_TOKEN
 * @param     options  other options to set
 * @param     plugins  one or more OctokitPlugins
 */
export function getOctokit(
  token: string,
  options?: OctokitOptions,
  plugins?: OcktokitPlugin | OctokitPlugin[]
): InstanceType<typeof GitHub> {
  const GitHubOctokit = new GitHub(getOctokitOptions(token, options))

  if (plugins) {
    GitHubOctokit.plugin(plugins);
  }
  
  return GitHubOctokit
}
