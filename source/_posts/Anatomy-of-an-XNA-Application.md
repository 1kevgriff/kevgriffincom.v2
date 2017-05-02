---
title: Anatomy of an XNA Application
categories: 
  - Development
permalink: anatomy-of-an-xna-application
updated: '2009-01-04 06:54:44'
date: 2009-01-04 06:54:44
---

So you have your environment set up, and you create your first XNA project.  XNA Game Studio sets up your project, and gives you a great skeleton for developing your game.  Below is the complete "Game1.cs" file you're given.  I recommend renaming this file and class to something a bit more meaningful.
<pre lang="csharp">using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Audio;
using Microsoft.Xna.Framework.Content;
using Microsoft.Xna.Framework.GamerServices;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;
using Microsoft.Xna.Framework.Media;
using Microsoft.Xna.Framework.Net;
using Microsoft.Xna.Framework.Storage;

namespace LastAgent
{
    ///
    /// This is the main type for your game
    ///
    public class Game1 : Microsoft.Xna.Framework.Game
    {
        GraphicsDeviceManager graphics;
        SpriteBatch spriteBatch;

        public Game1()
        {
            graphics = new GraphicsDeviceManager(this);
            Content.RootDirectory = "Content";
        }

        ///
        /// Allows the game to perform any initialization it needs to before starting to run.
        /// This is where it can query for any required services and load any non-graphic
        /// related content.  Calling base.Initialize will enumerate through any components
        /// and initialize them as well.
        ///
        protected override void Initialize()
        {
            // TODO: Add your initialization logic here

            base.Initialize();
        }

        ///
        /// LoadContent will be called once per game and is the place to load
        /// all of your content.
        ///
        protected override void LoadContent()
        {
            // Create a new SpriteBatch, which can be used to draw textures.
            spriteBatch = new SpriteBatch(GraphicsDevice);

            // TODO: use this.Content to load your game content here
        }

        ///
        /// UnloadContent will be called once per game and is the place to unload
        /// all content.
        ///
        protected override void UnloadContent()
        {
            // TODO: Unload any non ContentManager content here
        }

        ///
        /// Allows the game to run logic such as updating the world,
        /// checking for collisions, gathering input, and playing audio.
        ///
        /// Provides a snapshot of timing values.
        protected override void Update(GameTime gameTime)
        {
            // Allows the game to exit
            if (GamePad.GetState(PlayerIndex.One).Buttons.Back == ButtonState.Pressed)
                this.Exit();

            // TODO: Add your update logic here

            base.Update(gameTime);
        }

        ///
        /// This is called when the game should draw itself.
        ///
        /// Provides a snapshot of timing values.
        protected override void Draw(GameTime gameTime)
        {
            GraphicsDevice.Clear(Color.CornflowerBlue);

            // TODO: Add your drawing code here

            base.Draw(gameTime);
        }
    }
}</pre>

Let's evaluate the various parts of this code.  We'll ignore the using statements, and get right into the meat of the class.  Below is a snippet of the code.  We're given two objects, GraphicsDeviceManager and SpriteBatch.  The GraphicsDeviceManager helps us determine the type of device we're going to be outputting to.  This can range from various PC graphics cards to the Zune or Xbox 360.  We'll use this class later to alter our output based on users environment.  Next is the SpriteBatch.  Think of this as a List<> of images you want to draw to the screen.  This will be covered a little bit later in the Draw() method.

Next is the game class constructor, which sets up the GraphicsDeviceManager and sets our Content pipeline.  The content pipeline is a post all in itself, so don't worry too much about it now.  The Initialize() method provides you a place to do anything you need to do before the game runs.  I'm at a loss for a good example of what you would put here, but if I ever think of one, I'll be sure to let you know.

<pre lang="csharp">
GraphicsDeviceManager graphics;
        SpriteBatch spriteBatch;

        public Game1()
        {
            graphics = new GraphicsDeviceManager(this);
            Content.RootDirectory = "Content";
        }

        ///
        /// Allows the game to perform any initialization it needs to before starting to run.
        /// This is where it can query for any required services and load any non-graphic
        /// related content.  Calling base.Initialize will enumerate through any components
        /// and initialize them as well.
        ///
        protected override void Initialize()
        {
            // TODO: Add your initialization logic here

            base.Initialize();
        }
</pre>

Next are our Load and Unload content methods.  The purpose of these methods are to load all the content you need to start the game.  The comment says "load all your content", but realistically you don't want to do that.  For demos, this is ok.  For commercial games, you want to load as little as possible to get the user going and load as necessary.  That's what loading screens are for!

<pre lang="csharp">
        ///
        /// LoadContent will be called once per game and is the place to load
        /// all of your content.
        ///
        protected override void LoadContent()
        {
            // Create a new SpriteBatch, which can be used to draw textures.
            spriteBatch = new SpriteBatch(GraphicsDevice);

            // TODO: use this.Content to load your game content here
        }

        ///
        /// UnloadContent will be called once per game and is the place to unload
        /// all content.
        ///
        protected override void UnloadContent()
        {
            // TODO: Unload any non ContentManager content here
        }
</pre>

The last two methods are the meat of your XNA application.  The Update() method is provided to you as a way to update the state of your game.  As the comment says, you use this method to update your world, check for collisions, gather input, play audio, etc.  By default, you're given code that will detect a button press from an Xbox 360 controller.  Keep in mind when designing your games if you are going to accept input from just a 360 controller, keyboard, mouse, or all of the above.

Finally, there is the Draw method, and this is where all your content makes it onto the screen.  The first line clears the screen.  This is a very necessary step.  Failing to clear the screen would lead to some wacky results.  Think of the screen as a canvas.  You can't simply redraw on top of what you've already drawn.  Calling the clear method results in a new canvas.  This screen is where our friend SpriteBatch will come in handy.

<pre lang="csharp">
        ///
        /// Allows the game to run logic such as updating the world,
        /// checking for collisions, gathering input, and playing audio.
        ///
        /// Provides a snapshot of timing values.
        protected override void Update(GameTime gameTime)
        {
            // Allows the game to exit
            if (GamePad.GetState(PlayerIndex.One).Buttons.Back == ButtonState.Pressed)
                this.Exit();

            // TODO: Add your update logic here

            base.Update(gameTime);
        }

        ///
        /// This is called when the game should draw itself.
        ///
        /// Provides a snapshot of timing values.
        protected override void Draw(GameTime gameTime)
        {
            GraphicsDevice.Clear(Color.CornflowerBlue);

            // TODO: Add your drawing code here

            base.Draw(gameTime);
        }
</pre>

And that's about it!  Press Ctrl-F5 to build and run your first XNA application.  You should be greeted with a pretty, Cornflower Blue screen.  What you're not seeing is your Update and Draw methods being called continuously.

What's next for our little application?  For starters, we need to get some stuff on the screen.  For my game, I'm going to be using a tile based game, so my next entry will revolve around loading tile sets and drawing them to the screen.

Happy developing!