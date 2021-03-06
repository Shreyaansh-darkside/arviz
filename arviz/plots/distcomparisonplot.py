"""Density Comparison plot."""

from .plot_utils import (
    xarray_var_iter,
    _scale_fig_size,
    get_plotting_function,
    vectorized_to_hex,
)
from ..utils import _var_names, get_coords
from ..rcparams import rcParams


def plot_dist_comparison(
    data,
    kind="latent",
    figsize=None,
    textsize=None,
    var_names=None,
    coords=None,
    transform=None,
    legend=True,
    ax=None,
    prior_kwargs=None,
    posterior_kwargs=None,
    observed_kwargs=None,
    backend=None,
    backend_kwargs=None,
    show=None,
):
    """Plot to compare fitted and unfitted distributions.

    The resulting plots will show the compared distributions both on
    separate axes (particularly useful when one of them is substantially tighter
    than another), and plotted together, so three plots per distribution

    Parameters
    ----------
    data : az.InferenceData object
        InferenceData object containing the posterior/prior data.
    kind : str
        kind of plot to display {"latent", "observed"}, defaults to 'latent'.
        "latent" includes {"prior", "posterior"} and "observed" includes
        {"observed_data", "prior_predictive", "posterior_predictive"}
    figsize : tuple
        Figure size. If None it will be defined automatically.
    textsize: float
        Text size scaling factor for labels, titles and lines. If None it will be
        autoscaled based on figsize.
    var_names : str, list, list of lists
        if str, plot the variable. if list, plot all the variables in list
        of all groups. if list of lists, plot the vars of groups in respective lists.
    coords : dict
        Dictionary mapping dimensions to selected coordinates to be plotted.
        Dimensions without a mapping specified will include all coordinates for
        that dimension.
    transform : callable
        Function to transform data (defaults to None i.e. the identity function)
    legend : bool
        Add legend to figure. By default True.
    ax: axes, optional
        Matplotlib axes: The ax argument should have shape (nvars, 3), where the
        last column is for the combined before/after plots and columns 0 and 1 are
        for the before and after plots, respectively.
    prior_kwargs : dicts, optional
        Additional keywords passed to `arviz.plot_dist` for prior/predictive groups.
    posterior_kwargs : dicts, optional
        Additional keywords passed to `arviz.plot_dist` for posterior/predictive groups.
    observed_kwargs : dicts, optional
        Additional keywords passed to `arviz.plot_dist` for observed_data group.
    backend: str, optional
        Select plotting backend {"matplotlib","bokeh"}. Default "matplotlib".
    backend_kwargs: bool, optional
        These are kwargs specific to the backend being used. For additional documentation
        check the plotting method of the backend.
    show : bool, optional
        Call backend show function.

    Returns
    -------
    axes : a numpy 2d array of matplotlib axes. Returned object will have shape (nvars, 3),
    where the last column is the combined plot and the first columns are the single plots.

    Examples
    --------
    Plot the prior/posterior plot for specified vars and coords.

    .. plot::
        :context: close-figs

        >>> import arviz as az
        >>> data = az.load_arviz_data('rugby')
        >>> az.plot_dist_comparison(data, var_names=["defs"], coords={"team" : ["Italy"]})

    """
    all_groups = ["prior", "posterior"]

    if kind == "observed":
        all_groups = ["observed_data", "prior_predictive", "posterior_predictive"]

    if coords is None:
        coords = {}

    if prior_kwargs is None:
        prior_kwargs = {}

    if posterior_kwargs is None:
        posterior_kwargs = {}

    if observed_kwargs is None:
        observed_kwargs = {}

    if backend_kwargs is None:
        backend_kwargs = {}

    datasets = []
    groups = []
    for group in all_groups:
        try:
            datasets.append(getattr(data, group))
            groups.append(group)
        except:  # pylint: disable=bare-except
            pass

    if var_names is None:
        var_names = list(datasets[0].data_vars)

    if isinstance(var_names, str):
        var_names = [var_names]

    if isinstance(var_names[0], str):
        var_names = [var_names for _ in datasets]

    var_names = [_var_names(vars, dataset) for vars, dataset in zip(var_names, datasets)]

    if transform is not None:
        datasets = [transform(dataset) for dataset in datasets]

    datasets = get_coords(datasets, coords)
    len_plots = rcParams["plot.max_subplots"] // (len(groups) + 1)
    len_plots = len_plots if len_plots else 1
    dc_plotters = [
        list(xarray_var_iter(data, var_names=var, combined=True))[:len_plots]
        for data, var in zip(datasets, var_names)
    ]

    nvars = len(dc_plotters[0])
    ngroups = len(groups)

    (figsize, _, _, _, linewidth, _) = _scale_fig_size(figsize, textsize, 2 * nvars, ngroups)

    posterior_kwargs.setdefault("plot_kwargs", dict())
    posterior_kwargs["plot_kwargs"]["color"] = vectorized_to_hex(
        posterior_kwargs["plot_kwargs"].get("color", "C0")
    )
    posterior_kwargs["plot_kwargs"].setdefault("linewidth", linewidth)
    posterior_kwargs.setdefault("hist_kwargs", dict())
    posterior_kwargs["hist_kwargs"].setdefault("alpha", 0.5)

    prior_kwargs.setdefault("plot_kwargs", dict())
    prior_kwargs["plot_kwargs"]["color"] = vectorized_to_hex(
        prior_kwargs["plot_kwargs"].get("color", "C1")
    )
    prior_kwargs["plot_kwargs"].setdefault("linewidth", linewidth)
    prior_kwargs.setdefault("hist_kwargs", dict())
    prior_kwargs["hist_kwargs"].setdefault("alpha", 0.5)

    observed_kwargs.setdefault("plot_kwargs", dict())
    observed_kwargs["plot_kwargs"]["color"] = vectorized_to_hex(
        observed_kwargs["plot_kwargs"].get("color", "C2")
    )
    observed_kwargs["plot_kwargs"].setdefault("linewidth", linewidth)
    observed_kwargs.setdefault("hist_kwargs", dict())
    observed_kwargs["hist_kwargs"].setdefault("alpha", 0.5)

    distcomparisonplot_kwargs = dict(
        ax=ax,
        nvars=nvars,
        ngroups=ngroups,
        figsize=figsize,
        dc_plotters=dc_plotters,
        legend=legend,
        groups=groups,
        prior_kwargs=prior_kwargs,
        posterior_kwargs=posterior_kwargs,
        observed_kwargs=observed_kwargs,
        backend_kwargs=backend_kwargs,
        show=show,
    )

    if backend is None:
        backend = rcParams["plot.backend"]
    backend = backend.lower()

    # TODO: Add backend kwargs
    plot = get_plotting_function("plot_dist_comparison", "distcomparisonplot", backend)
    axes = plot(**distcomparisonplot_kwargs)
    return axes
