using System.Collections.Generic;

namespace StoryTeller.Core.Entities
{
    public class Story
    {
        public Story()
        {
            _options = new List<StoryOption>();
        }

        public string Id { get; set; }
        public string Text { get; set; }
        private ICollection<StoryOption> _options;
        public IEnumerable<StoryOption> Options => _options;

        public void AddOption(StoryOption option)
        {
            _options.Add(option);
        }
    }
}