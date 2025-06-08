// array of product objects
const products = [
    {
        id: 1, 
        name: "Uncanny X-Men Omnibus Vol. 5", 
        image: "../a3/images/products/uxm5.webp", 
        price: 124.99, 
        author: "Chris Claremont, John Romita Jr.", 
        description: "Chris Claremont, together with an absolute dream team of art talent - John Romita Jr., Arthur Adams, Barry Windsor-Smith and Dave Cockrum - brings you more indisputable mutant masterworks! From Juggernaut's earthshaking return to the second \"Lifedeath\" to the conclusion of the Asgardian Wars, they're Marvel milestones one and all! You'll also see the birth of Nathan Summers and witness his \"Days of Future Past\" sibling Rachel coming to terms with the power of the Phoenix Force! The Beyonder and the mutant-hunting Nimrod loom over it all, and Barry Windsor-Smith crafts a defining Wolverine tale in \"Wounded Wolf.\" Also featuring Dave Cockrum's swashbuckling NIGHTCRAWLER limited series, and Ann Nocenti and Arthur Adams' quintessentially '80s LONGSHOT limited series!"
    },
    {
        id: 2, 
        name: "The True Lives of the Fabulous Killjoys: National Anthem",
        image: "../a3/images/products/killjoys.jpg",
        price: 59.99,
        author: "Gerard Way, Shaun Simon",
        description: "Forget everything you already knew about the Fabulous Killjoys! Writers Gerard Way and Shaun Simon, along with Illustrator Leonardo Romero (Hawkeye), colorist Jordie Bellaire (Redlands), and letterer Nate Piekos (The Umbrella Academy) team up to present an all-new modern day Killjoys series, as Way and Simon take it all the way back to the original story that inspired My Chemical Romance's concept album Danger Days and its dystopian comic book series in The True Lives of the Fabulous Killjoys: National Anthem. The Fabulous Killjoys, once a group of teenage exterminators determined to save reality, have lost their way--and their memories. Mike Milligram hits the road to bring the gang back together for a final showdown against an evil pharmaceutical corporation, their monstrous hitman, and savage gang rivals."
    },
    {
        id: 3,
        name: "Grommets",
        image: "../a3/images/products/grommets.jpg",
        price: 29.99,
        author: "Rick Remender, Brian Posehn",
        description: "GROMMETS is both an authentic look at ’80s skate culture—a snapshot of the generation that turned skating into a worldwide phenomenon—as well as a heartfelt coming-of-age story following two friends from troubled homes, navigating their damage in an era when no one cared. The series\’ title sprints from skater slang. A \"grommet\" is a commonly used term for a young up-and-coming skater or surfer. Since the \’60s, it\’s been used to describe the next generation of kids who, with youthful exuberance, love the sport but want to put their spin on it."
    },
    {
        id: 4,
        name: "East of West: The End Times Compendium",
        image: "../a3/images/products/eastofwest.jpg",
        price: 124.99,
        author: "Jonathan Hickman, Nick Dragotta",
        description: "This is the world. It is not the one we wanted, but it is the one we deserve. The Four Horsemen of the Apocalypse roam the Earth, signaling the End Times for humanity, and our best hope for life, lies in DEATH. Collecting all ten volumes of the critically acclaimed, New York Times-bestselling series into one massive paperback, this compendium tells the entire story of the epic sci-fi/Western EAST OF WEST by writer JONATHAN HICKMAN and artist NICK DRAGOTTA. Collects EAST OF WEST #1-45"
    },
    {
        id: 5,
        name: "Radiant Black Volume 6: The Catalyst War",
        image: "../a3/images/products/radiantblack.jpg",
        price: 32.99,
        author: "Kyle Higgins, Marcelo Costa",
        description: "THE CATALYST WAR CONCLUDES! Both Nathan and Marshall are pushed to their limits by the alien force that originally forged the Radiants—but only one will do the unthinkable to emerge victorious. THE CATALYST WAR ends here—and the future of RADIANT BLACK will never be the same! Collects RADIANT BLACK #28 A and B, #29 A and B, and #30 A and B."
    },
    {
        id: 6,
        name: "Snotgirl Volume 1: Green Hair Don't Care",
        image: "../a3/images/products/snotgirl.jpg",
        price: 18.99,
        author: "Bryan Lee O'Malley, Leslie Hung",
        description:"WHO IS LOTTIE PERSON? Is she a gorgeous, fun-loving social media star with a perfect life or a gross, allergy-ridden mess? Enter a world of snot, blood, and tears in this new ongoing series from New York Times Best Seller BRYAN LEE O\’MALLEY (Scott Pilgrim) and dazzling newcomer LESLIE HUNG!"
    },
    {
        id: 7,
        name: "Absolute Wonder Woman Volume 1: The Last Amazon",
        image: "../a3/images/products/wonderwoman.jpg",
        price: 32.99,
        author: "Kelly Thompson, Hayden Sherman",
        description: "Spiraling out of the catastrophic events of Absolute Power, a new side of the DC Universe is born-the Absolute Universe! In a different, darker world, Diana of Themyscira was not raised in paradise, but instead was exiled to the underworld as a baby and raised by an enemy. Darkness and exile did not destroy her; instead, they made her all the stronger-honed into an even greater weapon by tragedy, danger, and magic. Long denied her Amazonian heritage, Diana has finally reached the time for her to rejoin the surface world. Armed with new weapons forged in Hell, and a mission that looks a bit more like justice than peace, Diana will not be stopped on her quest to save the world and discover her place in it, even if that means carving it herself! Eisner Award-winning writer Kelly Thompson is joined by breakout superstar artist Hayden Sherman to reinvent Wonder Woman from the ground up! Collects Absolute Wonder Woman #1-7."
    },
    {
        id: 8,
        name: "The Complete Eightball: Issues 1-18",
        image: "../a3/images/products/eightball.jpg",
        price: 99.99,
        author: "Daniel Clowes",
        description: "The beloved comic book series Eightball made Daniel Clowes' name even before he gained fame as a bestselling graphic novelist (Ghost World, Patience, David Boring, Ice Haven) and screenwriter. From 1989 to 1997, he produced 18 issues of what is still widely considered one of the greatest and most influential comic book titles of all time. Now, Fantagraphics is collecting every single page of these long out-of-print issues in a paperback edition. It includes more than 500 pages of vintage Clowes: seminal serialized graphic novels, strips, and rants. Features new covers by Clowes, and \"Behind the Eightball\": the author's annotations for each issue, heavily illustrated with art and photos from his archives."
    },
    {
        id: 9,
        name: "Red Room: Trigger Warnings",
        image: "../a3/images/products/redroom.webp",
        price: 44.99,
        author: "Ed Piskor",
        description: "In this second Red Room collection, fan-favorite the Decimator presents… The Rat Queens! And unfortunately for them, they're front and center in the Decimator's most horrific red room broadcast yet! Also, hoodie horror comes to Red Room by way of the Punkinz: two sociopathic, aspiring red roomers who quickly make a name on the scene with their amateur snuff films. Fueled by a mutual passion and talent for murder, the young sweethearts aim to be the most notorious and wanted killers on the dark web… Plus, much more, including the mysterious island of Pitcairn, home to a native civilization that has been sacrificing their people to the gods for generations in hopes for a good crop season — until bitcoin pirates discover the uncharted island and hatch their own plans. The book also includes Piskor's exclusive \"Director's Commentary\" for virtually every page, tons of process art, sketchbook material, and other surprises exclusive to this collection."
    },
    {
        id: 10,
        name: "Paul Smith's The Uncanny X-Men: Artist's Edition",
        image: "../a3/images/products/paulsmith.jpg",
        price: 199.99,
        author: "Paul Smith",
        description: "A veritable cornucopia of classic Paul Smith original X-Men art, collected into one glorious Artist's Edition! Although the art appears to be in black and white, all Artist's Editions are shot in color so all the subtle nuances are clearly visible to the reader-and printed at 100 percent size as drawn, a massive 12 × 17 inches. The only better way to see Paul Smith's original art would be to hold it in your own hands. This volume not only includes pages from of his original run on X-Men (issues #165-175) but also showcases his classic two-issue crossover event X-Men/Alpha Flight. Plus, all of his original covers and two special foldouts of Marvel Fanfare #4 and X-Men/Alpha Flight #1."
    },
    {
        id: 11,
        name: "Ed Piskor's Hip Hop Family Tree: The Omnibus",
        image: "../a3/images/products/hiphop.jpg",
        price: 129.99,
        author: "Ed Piskor",
        description: "Discover the history of hip hop in graphic novel form — this omnibus collection of the New York Times best-selling series includes over 140 pages of extras in a deluxe hardcover for the first time! This omnibus collection includes the original 360-page series with over 140 pages of extra material: a cover gallery of every HHFT book and comic book cover and back cover Piskor ever created, pages from the HHFT comic book series that have never been collected, new annotations of the entire series by Piskor, and much more. Plus, it features a foreword by Charlie Ahearn and an afterword by Bill Adler."
    },
    {
        id: 12,
        name: "New Mutants Epic Collection: The Demon Bear Saga",
        image: "../a3/images/products/demonbear.jpg",
        price: 59.99,
        author: "Chris Claremont, Bill Sienkiewicz",
        description: "Don't call them X-babies anymore! Visionary artist Bill Sienkiewicz transforms the New Mutants, and the young heroes' lives will never be the same! New recruits Magma and Magik find their footing at the school - but when the team tries to rescue Kitty Pryde from Emma Frost, will they all end up as members of rival mutant team the Hellions? Then, the Demon Bear that haunts Dani Moonstar bares its teeth! Will the New Mutants survive the Bear's ferocious attack - and if so, can they make a new friend in the alien called Warlock? Plus: A cosmic caper introduces intergalactic rock star Lila Cheney! When Sunspot and Wolfsbane are in danger, only Cloak and Dagger can help! Professor X's son, Legion, makes his mind-bending debut! And an old friend/foe makes a shocking return! Collecting NEW MUTANTS (1983) #13-31 and ANNUAL #1."
    }
]