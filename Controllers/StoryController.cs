using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;

using StoryTeller.Core.Entities;

namespace StoryTeller.Controllers
{
    [Route("api/[controller]")]
    public class StoryController : Controller
    {
        private static readonly List<Story> Stories = new List<Story> { };

        public StoryController()
        {
            for (int i = 0; i < 50; i++)
            {
                var story = new Story
                {
                    Id = Guid.NewGuid().ToString(),
                    Text = Guid.NewGuid().ToString(),
                };
                Stories.Add(story);
            }

            for (var i = 0; i < Stories.Count - 1; i++)
            {
                if (i % 10 == 0)
                {
                    var option1 = new StoryOption
                    {
                    Id = Guid.NewGuid().ToString(),
                    Text = Guid.NewGuid().ToString(),
                    NextId = Stories[(i + 2)].Id
                    };

                    var option2 = new StoryOption
                    {
                        Id = Guid.NewGuid().ToString(),
                        Text = Guid.NewGuid().ToString(),
                        NextId = Stories[(i + 2)].Id
                    };

                    Stories[i].AddOption(option1);
                    Stories[i].AddOption(option2);
                }
            }
        }

        [HttpGet("")]
        public Story GetFirstStory()
        {
            return Stories.First();
        }

        [HttpGet("{id}}")]
        public object Story(string id)
        {
            return Stories.Single(x => x.Id == id);
        }
    }
}