// Type definitions for page v1.5.0
// Project: http://visionmedia.github.io/page.js/
// Definitions by: Alan Norbauer <http://alan.norbauer.com/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 *  Defines a route mapping path to the given callback(s).
 *
 *      page('/', user.list)
 *      page('/user/:id', user.load, user.show)
 *      page('/user/:id/edit', user.load, user.edit)
 *      page('*', notfound)
 *
 *  Links that are not of the same origin are disregarded and will not be dispatched.
 */
declare function page(path: string, ...callbacks: page.Callback[]): void;
/**
 * This is equivalent to page('*', callback) for generic "middleware".
 */
declare function page(callback: page.Callback): void;
/**
 *  Navigate to the given path.
 *
 *      $('.view').click(function(e){
 *        page('/user/12')
 *        e.preventDefault()
 *      })
 */
declare function page(path: string): void;
/**
 * Setup redirect form one path to other.
 */
declare function page(fromPath: string, toPath: string): void;
/**
 * Register page's popstate / click bindings. If you're doing selective binding you'll like want to pass { click: false } to specify this yourself. The following options are available:
 *
 *     - click bind to click events [true]
 *     - popstate bind to popstate[true]
 *     - dispatch perform initial dispatch[true]
 *     - hashbang add #!before urls[false]
 *
 * If you wish to load serve initial content from the server you likely will want to set dispatch to false.
 */
declare function page(options: page.Options): void;
/**
 * Register page's popstate / click bindings. If you're doing selective binding you'll like want to pass { click: false } to specify this yourself. The following options are available:
 *
 *     - click bind to click events [true]
 *     - popstate bind to popstate[true]
 *     - dispatch perform initial dispatch[true]
 *     - hashbang add #!before urls[false]
 *
 * If you wish to load serve initial content from the server you likely will want to set dispatch to false.
 */
declare function page(): void;
declare namespace page {
  /**
   * Identical to page(fromPath, toPath)
   */
  function redirect(fromPath: string, toPath: string): void;
  /**
   *  Calling page.redirect with only a string as the first parameter redirects to another route. Waits for the current route to push state and after replaces it with the new one leaving the browser history clean.
   *
   *      page('/default', function(){
   *        // some logic to decide which route to redirect to
   *        if(admin) {
   *          page.redirect('/admin');
   *        } else {
   *          page.redirect('/guest');
   *        }
   *      });
   *
   *      page('/default');
   *
   */
  function redirect(page: string): void;
  /**
   *  Navigate to the given path.
   *
   *      $('.view').click(function(e){
   *        page('/user/12')
   *        e.preventDefault()
   *      })
   *
   * Identical to page(path).
   */
  function show(path: string): void;
  /**
   * Register page's popstate / click bindings. If you're doing selective binding you'll like want to pass { click: false } to specify this yourself. The following options are available:
   *
   *     - click bind to click events [true]
   *     - popstate bind to popstate[true]
   *     - dispatch perform initial dispatch[true]
   *     - hashbang add #!before urls[false]
   *
   * If you wish to load serve initial content from the server you likely will want to set dispatch to false.
   *
   * Identical to page([options]).
   */
  function start(options: Options): void;
  /**
   * Register page's popstate / click bindings. If you're doing selective binding you'll like want to pass { click: false } to specify this yourself. The following options are available:
   *
   *     - click bind to click events [true]
   *     - popstate bind to popstate[true]
   *     - dispatch perform initial dispatch[true]
   *     - hashbang add #!before urls[false]
   *
   * If you wish to load serve initial content from the server you likely will want to set dispatch to false.
   */
  function start(): void;
  /**
   * Unbind both the popstate and click handlers.
   */
  function stop(): void;
  /**
   * Get or set the base path. For example if page.js is operating within /blog/* set the base path to "/blog".
   */
  function base(path?: string): void;
  /**
   * Defines an exit route mapping path to the given callback(s).
   *
   * Exit routes are called when a page changes, using the context from the previous change. For example:
   *
   *     page('/sidebar', function(ctx, next) {
   *       sidebar.open = true
   *       next()
   *     })
   *
   *     page.exit('/sidebar', function(next) {
   *       sidebar.open = false
   *       next()
   *     })
   */
  function exit(path: string, callback: Callback, ...moreCallbacks: Callback[]): void;
  /**
   * Equivalent to page.exit('*', callback).
   */
  function exit(callback: Callback): void;
  interface Options {
    /**
     * bind to click events (default = true)
     */
    click?: boolean;
    /**
     * bind to popstate (default = true)
     */
    popstate?: boolean;
    /**
     * perform initial dispatch (default = true)
     */
    dispatch?: boolean;
    /**
     * add #!before urls (default = false)
     */
    hashbang?: boolean;
  }

  interface Callback {
    (ctx: Context, next: () => any): any;
  }

  /**
   * Routes are passed Context objects, these may be used to share state, for example ctx.user =, as well as the history "state" ctx.state that the pushState API provides.
   */
  interface Context {
    [idx: string]: any;
    /**
     * Saves the context using replaceState(). For example this is useful for caching HTML or other resources that were loaded for when a user presses "back".
     */
    save: () => void;
    /**
     *  If true, marks the context as handled to prevent default 404 behaviour. For example this is useful for the routes with interminate quantity of the callbacks.
     */
    handled: boolean;
    /**
     *  Pathname including the "base" (if any) and query string "/admin/login?foo=bar".
     */
    canonicalPath: string;
    /**
     *  Pathname and query string "/login?foo=bar".
     */
    path: string;
    /**
     *  Query string void of leading ? such as "foo=bar", defaults to "".
     */
    querystring: string;
    /**
     *  The pathname void of query string "/login".
     */
    pathname: string;
    /**
     *  The pushState state object.
     */
    state: any;
    /**
     * The pushState title.
     */
    title: string;
    /**
     * The parameters from the url, e.g. /user/:id => Context.params.id
     */
    params: any;
  }
}
export = page;
