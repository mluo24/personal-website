import React from "react"

export interface ChildrenPageTypes {
  children: JSX.Element
}

export interface MultipleChildrenTypes {
  children: React.ReactNode
}

export interface MDXQueryNodeTypes {
  body: string
  id: string
}

export interface ProjectCardType extends MDXQueryNodeTypes {
  frontmatter: {
    title: string
    year: string
    technologies: string[]
    githubLink: string
    link?: string
  }
}

export interface ProjectGridType {
  projects: ProjectCardType[]
}

export interface TimelineBlockType extends MDXQueryNodeTypes {
  frontmatter: {
    startDate: string
    endDate: string
    role: string
    isCurrent: boolean
    title: string
    companyUrl?: string
  }
  margin?: string | number
}

export interface TimelineType {
  jobs: TimelineBlockType[]
}

export interface IconInfoType {
  icon: JSX.Element
  content: string
}
