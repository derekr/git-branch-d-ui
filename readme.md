# git branch d ui
#### Web ui for deleting git branches

Sometimes I cut a lot of branches. **A LOT** of branches. They grow stale and 
I need to clear them out. I am probably dumb and missing something in my normal 
git workflow, but I thought something like this would be handy.

## Usage

```
cd /path/to/repo
git-branch-d-ui
```

This starts a server at [http://localhost:8080]() that will render a list 
of all branches for the repo. You can then check the repos you want to delete 
and click the "Delete" button. This will return a text response of:

```
git branch -D [selected branches]
```

## Install

```
npm install git-branch-d-ui
```

![List](https://raw.github.com/derekr/git-branch-d-ui/master/doc/list.png)
![List](https://raw.github.com/derekr/git-branch-d-ui/master/doc/command.png)

## Future

Currently this is the most basic implementation to get the job done, but I think 
it would be cool to mimic github's branch list w/ branch stats and what not. 
