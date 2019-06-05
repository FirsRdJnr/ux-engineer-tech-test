# Sky Betting & Gaming UX Engineer Tech Test

## The Test

The code provided is a simple parcel.js react package which has some skeleton components and styling. This is for reference only so feel free to use whatever method or technology you feel comfortable with to complete the tasks. If you do wish to use this application we would like you to treat it as all refactorable. We’ve listed the tasks below along with some extra credit questions. If you don’t have the time or the knowledge to complete them all that's ok; we just want to see how you approach the problem.

*The [JSON supplied](./src/data/) with this package is a true representation of games, promotions and user data that we work with, please use this in whatever application you build.*

*We have provided a style guide that we recommend you refer to while completing the tasks.*

### The Task

Using the provided [style guide](./UIStyleguideSkyArcade.pdf) and [wireframes](./promo-wireframes.pdf), we would like to see a clear promotional journey from the homepage, to promotion information to launch a game.

1. Update the [promotional hero area](./src/components/Promos/Heropromo.js) on the homepage to properly display the featured promotions from the [promotional list](./src/data/PromoData.json).
2. The [promotional listing](./src/components/Promos/PromoList.js) needs styling.
3. The [promotion detail page](./src/components/Promos/PromoDetails.js) needs styling.

#### Some information from our researchers:

- We have higher opt-in rates for promotions if players can see what games are associated with a promotion.
- Customers currently find it difficult to see what promotions they're opted in to, and their progression through certain promotions. Re-ordering and highlighting this information on the promotional listing page worked well in lab tests.
- Customers often get stuck in a promotion with no clear way back to the games they were playing.
- A study has shown that users have more engagement with games when they’re presented with extra game details, but currently accessing these details requires leaving the current page, which impacts promotion opt-in rates.

#### Extra Credit:

- How would you increase the opt-in rate for the "have a MEGAways experience"?
- How would you help players get back to the game they were playing?
- How would you show promotion progression in-game?
- How would you offer more game informtaion from a promotion details page?

## Review Criteria

All tech test submissions (for any of our tech tests) are anonymised and reviewed using a standard template.

At a high level we will be looking for:

- Clear instructions for how to run the application on a reviewer's machine
- Good understanding of the tasks undertaken and content presented in a clear, understandable format
- Ability to follow and apply style guidelines and patterns technically
- Well structured code

There's flexibility in the review process to take into account candidates who have strengths in different areas. Submissions that are very strong on visual design, UX and css are equally as valid as those which focus on the underlying code.

As mentioned previously, we aren't prescribing any specific languages, libraries or frameworks for the test but obviously the reviewer will need to take into account choices made in this area. For example, a submission using a technology like [create react app](https://github.com/facebookincubator/create-react-app) or [parcel.js](https://parceljs.org/) will potentially offer a more complete set of tasks than one attempting to build everything from scratch. It is up to you to decide how pragmatic you wish to be. Make sure you choose an approach which you feel will show off your talents most effectively.

## Getting Started

### Running this codebase

Full details of Parcel.js are available [on the parcel.js getting started page](https://parceljs.org/getting_started.html). 

```bash
# installing
npm install

# running
npm start
```

## The Deliverable

Replace the contents of this README.md with:

  1. A covering note explaining the technology choices you have made.
  2. Notes on why you have chosen to solve the problems the way you have.
  3. Anything you would have added if you had more time and how you would have done that.
  4. Any instructions required to run your solution and tests in a Linux environment.

Email as an attachment or a link the git bundled repository showing your commit history with all your commits on the master branch:

```bash
git bundle create <anything>.bundle --all --branches
```

## Equality & Diversity 

We consider all candidates equally, fairly and without bias.  To that end, we ask that you do not leave any personally identifying information in your submission (such as your name within an author field or file, or in use as test data).
