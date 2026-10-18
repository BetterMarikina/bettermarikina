export default function HotlineBar(): JSX.Element {
  return (
    <div className="hotline-bar">
      <div className="container">
        <div className="hotline-inner">
          <div className="hotline-items">
            <a href="tel:161" className="hotline-item">
              <i className="bi bi-exclamation-triangle-fill" aria-hidden="true"></i>
              <span>Rescue 161: 161</span>
            </a>
            <a href="tel:09175842168" className="hotline-item">
              <i className="bi bi-phone-fill" aria-hidden="true"></i>
              <span>Rescue (Globe): 0917 584 2168</span>
            </a>
            <a href="tel:09285593341" className="hotline-item">
              <i className="bi bi-phone-fill" aria-hidden="true"></i>
              <span>Rescue (Smart): 0928 559 3341</span>
            </a>
            <a href="tel:0286460462" className="hotline-item">
              <i className="bi bi-building" aria-hidden="true"></i>
              <span>City Hall: (02) 8646-0462</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
