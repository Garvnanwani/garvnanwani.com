const Timeline = () => {
  return (
    <section>
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Timeline</h2>
        <div className="mx-auto w-24 h-1 mb-5 bg-secondary"></div>
      </div>
      <div className="w-10/12 max-w-2xl mx-auto">
        <article className="timeline-item">
          <h4>Sept - 2020</h4>
          <p>Currently working on a full stack MERN project.</p>
          <span className="number"> 6 </span>
        </article>
        <article className="timeline-item">
          <h4>Aug - 2020</h4>
          <p>
            Started writing blogs, sharing my knowledge, and giving back to the
            community. Got pretty active on twitter, Connected with a lot of
            like-minded developers, and trying to be an active member of the
            community as much as I can, also made my blog with the help of
            Django to share what I learned with the community.
          </p>
          <span className="number"> 5 </span>
        </article>
        <article className="timeline-item">
          <h4>April - 2020</h4>
          <p>
            Got hands onto react and nodejs, both are amazing technologies and
            slowly started getting my hands dirty with MERN stack and learning
            how to make to full-fledged apps out of it.
          </p>
          <span className="number"> 4 </span>
        </article>
        <article className="timeline-item">
          <h4> Jan - 2020</h4>
          <p>
            Started with JavaScript, its a complete language in itself and it
            took me a while to get on hold with it. Played around with
            JavaScript, skimmed through its frameworks, and make some small
            projects out of it.
          </p>
          <span className="number"> 3 </span>
        </article>
        <article className="timeline-item">
          <h4>2019</h4>
          <p>
            School over, came into college. Started learning web development.
            Cleared the basics like how the web works, how files are
            transferred, and all. Then completed an HTML, CSS course and
            designed some basic websites with it that lacked functionality, and
            as I knew python I played around with Django and learned a lot about
            how the backend works
          </p>
          <span className="number"> 2 </span>
        </article>
        <article className="timeline-item">
          <h4>2018</h4>
          <p>
            Started with learning python, my main goal with programming was to
            create things that could help the masses. Python was a great
            language to jump on but it didn't teach the basics of how computer
            work so I learned java and C with it.
          </p>
          <span className="number"> 1 </span>
        </article>
      </div>
    </section>
  )
}

export default Timeline
