import React from "react"
import { Timeline, Text, List } from "@mantine/core"
import {
  GitBranch,
  GitPullRequest,
  GitCommit,
  MessageDots,
} from "tabler-icons-react"

const TestPage = () => {
  return (
    <Timeline active={3} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<GitBranch size={12} />} title="New branch">
        <Text color="dimmed" size="sm">
          You&apos;ve created new branch{" "}
          <Text variant="link" component="span" inherit>
            fix-notifications
          </Text>{" "}
          from master
        </Text>
        <List withPadding>
          <List.Item>Clone or download repository from GitHub</List.Item>
          <List.Item>Install dependencies with yarn</List.Item>
          <List.Item>To start development server run npm start command</List.Item>
          <List.Item>
            Run tests to make sure your changes do not break the build
          </List.Item>
          <List.Item>Submit a pull request once you are done</List.Item>
        </List>
        <Text size="xs" mt={4}>
          2 hours ago
        </Text>
      </Timeline.Item>

      <Timeline.Item bullet={<GitCommit size={12} />} title="Commits">
        <Text color="dimmed" size="sm">
          You&apos;ve pushed 23 commits to
          <Text variant="link" component="span" inherit>
            fix-notifications branch
          </Text>
        </Text>
        <Text size="xs" mt={4}>
          52 minutes ago
        </Text>
      </Timeline.Item>

      <Timeline.Item title="Pull request" bullet={<GitPullRequest size={12} />}>
        <Text color="dimmed" size="sm">
          You&apos;ve submitted a pull request
          <Text variant="link" component="span" inherit>
            Fix incorrect notification message (#187)
          </Text>
        </Text>
        <Text size="xs" mt={4}>
          34 minutes ago
        </Text>
      </Timeline.Item>

      <Timeline.Item title="Code review" bullet={<MessageDots size={12} />}>
        <Text color="dimmed" size="sm">
          <Text variant="link" component="span" inherit>
            Robert Gluesticker
          </Text>{" "}
          left a code review on your pull request
        </Text>
        <Text size="xs" mt={4}>
          12 minutes ago
        </Text>
      </Timeline.Item>
      <Timeline.Item bulletSize={1} />
    </Timeline>
  )
}

export default TestPage
