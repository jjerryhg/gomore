﻿using System.Web;
using System.Web.Optimization;

namespace gomore
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            //Custom CSS and Javascript
            bundles.Add(new StyleBundle("~/Content/navbar").Include(
                       "~/Content/topnav.css",
                       "~/Content/login.css",
                       "~/Content/register.css",
                       "~/Content/sidebar.css"));

            bundles.Add(new StyleBundle("~/Content/DarkMode").Include(
                       "~/Content/color.css"));

            bundles.Add(new StyleBundle("~/Content/main").Include(
                        "~/Content/main.css"));

            bundles.Add(new ScriptBundle("~/bundles/main").Include(
                       "~/Scripts/main.js"));
        }
    }
}
