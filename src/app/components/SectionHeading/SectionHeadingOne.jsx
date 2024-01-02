import './sectionheading.scss';

const SectionHeadingOne = ({ heading, subheading }) => {
    const splitTitle = heading.split(' ');
    const firstWord = splitTitle.shift();
    const remainingTitle = splitTitle.join(' ');

    return (
        <div className="section-headeing">
            <h2>
                <span>{firstWord}</span>
                {remainingTitle}
            </h2>
            <p>{subheading}</p>
        </div>
    );
};

export default SectionHeadingOne;
